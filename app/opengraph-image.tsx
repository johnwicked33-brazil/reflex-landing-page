import { ImageResponse } from "next/og";

import { SEO } from "@/lib/seo";

export const alt = SEO.imageAlt;
export const contentType = "image/png";
export const size = {
  height: 630,
  width: 1200,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, #020403 0%, #071611 48%, #13382d 78%, #8be8bf 150%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              border: "1px solid rgba(139,232,191,0.46)",
              borderRadius: "999px",
              color: "#8be8bf",
              fontSize: 28,
              padding: "14px 22px",
            }}
          >
            Rebound App
          </div>
          <div style={{ color: "rgba(255,255,255,0.66)", fontSize: 26 }}>
            Voice AI para vendas
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: 0.96,
              maxWidth: 900,
            }}
          >
            Agentes de IA por voz para ligações comerciais
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.74)",
              fontSize: 34,
              lineHeight: 1.25,
              maxWidth: 930,
            }}
          >
            Reative leads, recupere carrinhos, confirme agendamentos e acompanhe
            campanhas com CRM e WhatsApp no mesmo fluxo.
          </div>
        </div>

        <div
          style={{
            color: "#8be8bf",
            display: "flex",
            fontSize: 28,
            gap: 28,
          }}
        >
          <span>Atendimento instantâneo</span>
          <span>Follow-up automático</span>
          <span>Brasil</span>
        </div>
      </div>
    ),
    size,
  );
}
