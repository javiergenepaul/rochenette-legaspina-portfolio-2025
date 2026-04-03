import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a12 0%, #1e1e2e 50%, #0a0a12 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Star dots */}
        {[
          { top: "12%", left: "8%", size: 3 },
          { top: "28%", left: "18%", size: 2 },
          { top: "65%", left: "6%", size: 4 },
          { top: "80%", left: "22%", size: 2 },
          { top: "18%", right: "10%", size: 3 },
          { top: "45%", right: "8%", size: 2 },
          { top: "72%", right: "15%", size: 4 },
          { top: "55%", left: "30%", size: 2 },
          { top: "20%", left: "45%", size: 3 },
          { top: "85%", left: "55%", size: 2 },
          { top: "10%", left: "70%", size: 3 },
          { top: "40%", right: "25%", size: 2 },
        ].map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: star.top,
              left: "left" in star ? star.left : undefined,
              right: "right" in star ? star.right : undefined,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.6)",
              display: "flex",
            }}
          />
        ))}

        {/* Glow ring */}
        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "8px",
              textTransform: "uppercase",
            }}
          >
            Rochenette Legaspina
          </div>
          <div
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            2027
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(255,255,255,0.3)",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "6px",
                textTransform: "uppercase",
              }}
            >
              Coming Soon
            </div>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(255,255,255,0.3)",
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
