import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, SEO, SITE_ORIGIN } from "@/lib/seo";

import "./globals.css";

const gladiaSans = localFont({
  variable: "--font-gladia-sans",
  display: "swap",
  src: [
    {
      path: "../public/gladia/fonts/645915254c0927edadbaf8be_SuisseIntl-Ultralight.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../public/gladia/fonts/645915253acb6777c922d50b_SuisseIntl-Book.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../public/gladia/fonts/66ed894a149ef6839c027728_SuisseIntl-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/gladia/fonts/645915251eb9a51dd774a244_SuisseIntl-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/gladia/fonts/64591525fc639083f8358171_SuisseIntl-SemiBold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/gladia/fonts/64591525f8bf850f893d0a72_SuisseIntl-Bold.otf",
      style: "normal",
      weight: "700",
    },
  ],
});

const gladiaMono = localFont({
  variable: "--font-gladia-mono",
  display: "swap",
  src: [
    {
      path: "../public/gladia/fonts/6690036e82ca9a7e73b79213_GeistMono-Regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/gladia/fonts/6690036e72bb6c22a601d8af_GeistMono-Medium.woff",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/gladia/fonts/6690359cb37e1ad9336733c4_GeistMono-SemiBold.woff",
      style: "normal",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: SITE_ORIGIN,
  applicationName: SEO.brandName,
  title: {
    default: SEO.title,
    template: `%s | ${SEO.brandName}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: SEO.author }],
  creator: SEO.author,
  publisher: SEO.author,
  category: SEO.category,
  alternates: {
    canonical: SEO.canonicalPath,
    languages: {
      "pt-BR": SEO.canonicalPath,
    },
  },
  icons: {
    icon: "/gladia/assets/66d1739eb3d771283bb9e675_favicon.png",
    apple: "/gladia/assets/66d173a496aae98d99f630a0_webclip.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: absoluteUrl(),
    siteName: SEO.brandName,
    locale: SEO.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SEO.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "/twitter-image",
        alt: SEO.imageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  other: {
    audience: "business",
    coverage: SEO.market,
    distribution: "global",
    "geo.country": "BR",
    "geo.placename": SEO.market,
    "geo.region": "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${gladiaSans.variable} ${gladiaMono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
