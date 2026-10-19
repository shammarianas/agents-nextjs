import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI Avatar for Sales, Support & Automation",
  description:
    "Talk to Agentix System's AI avatar about AI automation, voice agents, CRM automation, and business workflow solutions in Dubai and the UAE.",
  alternates: {
    canonical: "/assistant",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/assistant`,
    siteName: SITE.name,
    title: "AI Avatar for Sales, Support & Automation | Agentix System",
    description:
      "Talk to Agentix System's AI avatar about AI automation, voice agents, CRM automation, and business workflow solutions in Dubai and the UAE.",
    images: [
      {
        url: `${SITE.url}${SITE.logo}`,
        width: 1921,
        height: 520,
        alt: `${SITE.name} AI avatar assistant`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Avatar for Sales, Support & Automation | Agentix System",
    description:
      "Talk to Agentix System's AI avatar about AI automation, voice agents, CRM automation, and business workflow solutions in Dubai and the UAE.",
    images: [`${SITE.url}${SITE.logo}`],
  },
};

export default function AssistantLayout({ children }: { children: React.ReactNode }) {
  return children;
}
