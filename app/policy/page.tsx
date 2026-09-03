import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Agentix System, AI Automation Agents",
  description:
    "Learn how Agentix collects, uses, and protects your personal information when you visit our website, request a demo, or work with our team.",
  keywords: [
    "Agentix privacy policy",
    "AI automation data privacy",
    "Agentix data protection",
    "how Agentix uses your data",
  ],
  alternates: { canonical: "/policy" },
};

export default function PolicyPage() {
  return (
    <main className="pb-20 pt-20">
      <div className="wrap max-w-3xl">
        <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
          Privacy Policy
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-textDim/70 mb-8">
          Last updated: September 2026
        </p>

        <div className="space-y-8 text-textDim text-[1.02rem] leading-8">
          <section className="space-y-4">
            <p>
              We know privacy pages usually get skipped, but we&apos;d rather you actually know what happens to your information here. So no dense legal wording, just a straight explanation of what we collect and why.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">What we actually collect</h2>
            <p>
              Nothing sneaky. When you book a demo, fill in our consultation form, or drop us an email, we get whatever you type in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Any project details you decide to share</li>
            </ul>
            <p>
              We&apos;re not tracking your device secretly or pulling in data from somewhere else. If you didn&apos;t give it to us, we don&apos;t have it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">Why we bother collecting it</h2>
            <p>
              Pretty simple, really. We need it to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reply to your enquiries</li>
              <li>Figure out what your project actually needs</li>
              <li>Put together a proposal</li>
              <li>Stay in touch once things kick off</li>
              <li>Improve what we offer over time</li>
            </ul>
            <p>
              One thing we will never do is sell your information or hand it off to some other company for their own use. That&apos;s just not on the table for us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">The third parties involved</h2>
            <p>
              Running a website and managing client communication means we lean on a few outside tools:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hosting providers</li>
              <li>Email software</li>
              <li>CRM tools and related integrations</li>
            </ul>
            <p>
              They only see what they need to do their specific job, and they&apos;re under confidentiality agreements. None of them get to use your data for anything beyond helping us serve you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">What our analytics tools pick up</h2>
            <p>
              Like almost every website out there, we run analytics to understand how people navigate our site, which pages get the most attention, and what device or browser someone&apos;s on. It&apos;s all lumped together as general usage patterns, not something we tie back to you individually. The goal is just to make the site work better, not to watch anyone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">What you can ask us to do</h2>
            <p>
              Anytime you want, you can reach out and ask us to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide what data we&apos;ve got on file for you</li>
              <li>Fix something that&apos;s wrong or outdated</li>
              <li>Delete your personal data altogether</li>
            </ul>
            <p>
              We&apos;ll act on it, unless there&apos;s a legal or contractual reason we need to hang onto certain records, and if that&apos;s the case, we&apos;ll explain why.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">How seriously we take security</h2>
            <p>
              We put real effort into protecting the data we hold, both on the technical side and in how our team operates. Still, honestly, nothing on the internet is bulletproof, so we can&apos;t sit here and promise it&apos;s 100% unbreakable. What we can promise is that if something ever did go wrong, we wouldn&apos;t hide it from you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">When this policy changes</h2>
            <p>
              Every so often we&apos;ll need to update this page, maybe our processes shift, maybe a new regulation comes into play. Whenever that happens, you&apos;ll see the date at the top change. If you keep using our website after that, it means the updated version applies to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">Still have questions?</h2>
            <p>Ask away, we&apos;re not hard to reach.</p>
            <ul className="list-none space-y-1 pl-0">
              <li><strong>Email:</strong> info@agentixsystem.com</li>
              <li><strong>Phone:</strong> +971 52 803 6012</li>
              <li><strong>Address:</strong> Dubai, United Arab Emirates</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}