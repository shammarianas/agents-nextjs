import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — AI Automation Agents`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "AI automation agents",
    "AI agents for business",
    "sales automation AI",
    "customer support AI agent",
    "workflow automation",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — AI Automation Agents`,
    description: SITE.description,
    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — AI Automation Agents`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI Automation Agents`,
    description: SITE.description,
    images: ["/assets/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    sameAs: [SITE.whatsapp],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
