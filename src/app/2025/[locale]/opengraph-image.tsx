import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageBuffer = fs.readFileSync(
    path.join(process.cwd(), "src/assets/images/rochenette-legaspina-dark.png")
  );
  const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #39074b 0%, #6c1e8a 45%, #ae3ee6 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(174, 62, 230, 0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(92, 30, 113, 0.4)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "64px",
            padding: "60px 80px",
            zIndex: 1,
          }}
        >
          {/* Profile image */}
          <img
            src={base64Image}
            width={260}
            height={260}
            style={{
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.25)",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "6px",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                fontSize: "58px",
                fontWeight: "bold",
                color: "white",
                lineHeight: 1.05,
              }}
            >
              Rochenette
              <br />
              Legaspina
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "rgba(255,255,255,0.75)",
                marginTop: "4px",
              }}
            >
              UI/UX Designer
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "16px",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "999px",
                padding: "8px 24px",
                width: "fit-content",
              }}
            >
              <span style={{ fontSize: "18px", color: "white", fontWeight: 600 }}>
                2025
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
