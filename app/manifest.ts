import type { MetadataRoute } from "next";

import { SEO } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO.brandName,
    short_name: "Rebound",
    description: SEO.description,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#020403",
    theme_color: "#8be8bf",
    icons: [
      {
        src: "/gladia/assets/66d1739eb3d771283bb9e675_favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/gladia/assets/66d173a496aae98d99f630a0_webclip.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
