import { GladiaHome } from "@/components/gladia/home";
import { buildLandingPageJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = JSON.stringify(buildLandingPageJsonLd()).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd }}
        type="application/ld+json"
      />
      <GladiaHome />
    </>
  );
}
