"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // raw target
    let tx = -200, ty = -200;
    // smoothed positions
    let ox = -200, oy = -200; // outer (slower)
    let ix = -200, iy = -200; // inner (faster)

    let raf = 0;

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }
    window.addEventListener("mousemove", onMove);

    function tick() {
      // outer halo — lazy follow
      ox += (tx - ox) * 0.07;
      oy += (ty - oy) * 0.07;
      // inner core — snappier follow
      ix += (tx - ix) * 0.18;
      iy += (ty - iy) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${ox}px, ${oy}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${ix}px, ${iy}px)`;
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer soft halo */}
      <div
        ref={outerRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 340,
          height: 340,
          marginLeft: -170,
          marginTop: -170,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(211,47,47,0.10) 0%, rgba(211,47,47,0.03) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
      {/* Inner bright core */}
      <div
        ref={innerRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,153,153,0.28) 0%, rgba(211,47,47,0.10) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
