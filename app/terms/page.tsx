import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Read the terms and conditions for ${SITE.name} services and website usage.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="pb-20 pt-20">
      <div className="wrap max-w-3xl">
        <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
          Terms &amp; Conditions
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-6">
          Terms of service
        </h1>

        <div className="space-y-6 text-textDim text-[1.02rem] leading-8">
          <p>
            By accessing or using {SITE.name}, you agree to these Terms &amp; Conditions. We may update these terms from time to time,
            and continued use of the site after changes constitutes acceptance of the revised terms.
          </p>

          <p>
            The content, branding, and materials on this website are provided for informational purposes only. We do not guarantee that
            all information is current, complete, or error-free, and you should rely on your own judgment when acting on any information
            presented here.
          </p>

          <p>
            Any proposals, quotes, or automation solutions discussed through this website are subject to mutual agreement, scope definition,
            timelines, and commercial terms agreed in writing between {SITE.name} and the client.
          </p>

          <p>
            You may not use the website for unlawful, abusive, or fraudulent activities. You agree not to attempt to interfere with the
            security, functionality, or reliability of the site, including unauthorized access attempts, automated scraping, or malicious
            activity.
          </p>

          <p>
            We reserve the right to restrict or terminate access to our website or services at our discretion if we believe a user violates
            these terms or acts in a way that may harm the business, clients, or operations of {SITE.name}.
          </p>

          <p>
            The website is provided on an “as is” basis. We do not warrant that the site will always be available, uninterrupted, or free
            from defects. To the maximum extent permitted by law, {SITE.name} shall not be liable for indirect, incidental, or consequential
            damages arising from website access or service engagement.
          </p>

          <p>
            These terms are governed by the laws of the United Arab Emirates, and any disputes will be subject to the jurisdiction of the
            courts located in Dubai, UAE, unless otherwise required by law.
          </p>
        </div>
      </div>
    </main>
  );
}
