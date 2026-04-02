"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = /* glsl */ `
uniform float uTime;
uniform vec2  uMouse;   // 0-1 normalised, y-flipped to match UV space
uniform float uAspect;  // viewport width / height
varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  /* ── base: dark red foundation ── */
  vec3 bg = mix(
    vec3(0.149, 0.0, 0.0),   // #260000
    vec3(0.239, 0.0, 0.0),   // #3d0000
    uv.x * 0.5 + (1.0 - uv.y) * 0.5
  );

  /* ── blob 1: main brand crimson ── */
  vec2 b1 = vec2(
    0.78 + 0.18 * sin(uTime * 0.55),
    0.28 + 0.20 * cos(uTime * 0.45)
  );
  float w1 = smoothstep(0.70, 0.0, length(uv - b1)) * 0.72;
  vec3  c1 = vec3(0.827, 0.184, 0.184); // #D32F2F

  /* ── blob 2: mid-red fill ── */
  vec2 b2 = vec2(
    0.12 + 0.10 * cos(uTime * 0.70),
    0.74 + 0.16 * sin(uTime * 0.60)
  );
  float w2 = smoothstep(0.55, 0.0, length(uv - b2)) * 0.55;
  vec3  c2 = vec3(0.718, 0.110, 0.110); // #B71C1C

  /* ── blob 3: soft rose accent ── */
  vec2 b3 = vec2(
    0.42 + 0.13 * sin(uTime * 0.40 + 1.5),
    0.48 + 0.13 * cos(uTime * 0.50 + 0.7)
  );
  float w3 = smoothstep(0.38, 0.0, length(uv - b3)) * 0.38;
  vec3  c3 = vec3(0.960, 0.600, 0.600); // #F59999

  /* ── cursor glow ── */
  // Correct for aspect ratio so the glow is a circle, not an ellipse
  vec2 mouseDelta = vec2((uv.x - uMouse.x) * uAspect, uv.y - uMouse.y);
  float md = length(mouseDelta);
  // outer soft halo
  float halo  = smoothstep(0.32, 0.0, md) * 0.40;
  // tight bright core
  float core  = smoothstep(0.08, 0.0, md) * 0.55;
  vec3  cm    = vec3(0.960, 0.420, 0.420); // #F56B6B — warm rose cursor

  /* ── composite ── */
  vec3 col = bg;
  col = mix(col, c1, w1);
  col = mix(col, c2, w2);
  col = mix(col, c3, w3);
  col = mix(col, cm, halo);
  col = mix(col, cm + 0.15, core);   // slightly brighter at the very centre

  gl_FragColor = vec4(col, 1.0);
}
`;

/* ------------------------------------------------------------------ */

function GradientMesh() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  // raw mouse target (updated by mousemove listener)
  const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
  // smoothed value sent to the shader
  const mouseSmooth = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouseTarget.current.set(
        e.clientX / window.innerWidth,
        // flip Y: UV 0 is bottom, screen Y 0 is top
        1 - e.clientY / window.innerHeight,
      );
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime:   { value: 0 },
      uMouse:  { value: new THREE.Vector2(0.5, 0.5) },
      uAspect: { value: window.innerWidth / window.innerHeight },
    }),
    [],
  );

  useFrame(({ clock, size }) => {
    if (!matRef.current) return;
    const u = matRef.current.uniforms;

    u.uTime.value = clock.elapsedTime;
    u.uAspect.value = size.width / size.height;

    // lerp the smoothed position toward the raw target
    mouseSmooth.current.lerp(mouseTarget.current, 0.06);
    u.uMouse.value.copy(mouseSmooth.current);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */

export function HeroBackground() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: false, powerPreference: "low-power", alpha: false }}
    >
      <GradientMesh />
    </Canvas>
  );
}
