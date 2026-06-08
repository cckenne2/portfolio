import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${siteConfig.name} — ${siteConfig.role}`;

/**
 * Branded 1200×630 social-share card, generated at build time with the logo
 * and the site's dark/cyan visual language. Shared by the Open Graph and
 * Twitter image routes.
 */
export function renderOgImage() {
  const logo = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #05070e 0%, #0a1020 55%, #0b1022 100%)",
          color: "#e6edf8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={104} height={104} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 34, color: "#22d3ee", marginTop: 6 }}>{siteConfig.role}</div>
          </div>
        </div>
        <div style={{ fontSize: 30, color: "#94a2bf", marginTop: 40 }}>
          {siteConfig.pillars.join("  ·  ")}
        </div>
        <div style={{ fontSize: 24, color: "#7686a6", marginTop: 28 }}>calebkennedy.me</div>
      </div>
    ),
    { ...ogSize },
  );
}
