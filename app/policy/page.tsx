import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read how ${SITE.name} handles your personal data and contact information.`,
  alternates: { canonical: "/policy" },
};

export default function PolicyPage() {
  return (
    <main className="pb-20 pt-20">
      <div className="wrap max-w-3xl">
        <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
          Privacy Policy
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-6">
          How we handle your information
        </h1>

        <div className="space-y-6 text-textDim text-[1.02rem] leading-8">
          <p>
            {SITE.name} is committed to protecting the privacy of visitors and clients. This policy explains how we collect, use, and
            store information when you visit our website or contact us.
          </p>

          <p>
            We may collect information such as your name, email address, phone number, company details, and other information you provide
            when submitting a form, requesting a demo, or contacting us for business inquiries.
          </p>

          <p>
            This information is used to respond to your enquiry, assess your project needs, provide proposals, improve our services, and
            maintain communication related to our work together. We do not sell or rent your personal information to third parties.
          </p>

          <p>
            We may use trusted service providers to help operate our website or process communications, but they are only permitted to use
            personal data in a way that supports our business operations and under confidentiality obligations.
          </p>

          <p>
            We may also use analytics or tracking tools to understand how visitors use our website and improve user experience. These tools
            may collect usage data such as pages visited, browser information, and device details.
          </p>

          <p>
            You may contact us at any time to request access to, correction of, or deletion of your personal information, subject to any
            legal or contractual obligations that require us to retain certain records.
          </p>

          <p>
            We take reasonable organizational and technical measures to protect the personal data we hold. However, no method of transmission
            or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <p>
            This policy may be updated from time to time to reflect changes in our practices or applicable law. Continued use of the website
            after the update means you accept the revised policy.
          </p>

          <p>
            If you have any questions about this policy or how your data is handled, please contact us at {SITE.email}.
          </p>
        </div>
      </div>
    </main>
  );
}
