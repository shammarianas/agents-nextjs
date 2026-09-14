import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Agentix System, AI Automation Agents",
  description:
    "Read the terms and conditions for using Agentix System AI automation services, the website, and products. Clear policies on usage, payments, data, and liability.",
  keywords: [
    "Agentix terms and conditions",
    "AI automation terms of service",
    "Agentix policy",
    "AI agents usage terms",
    "Agentix legal",
  ],
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="pb-20 pt-20">
      <div className="wrap max-w-3xl">
        <span className="text-accent2 text-xs font-semibold tracking-wide uppercase block mb-3">
          Terms &amp; Conditions
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-2">
          Terms of service
        </h1>
        <p className="text-sm text-textDim/70 mb-8">
          Last updated: September 2026
        </p>

        <div className="space-y-8 text-textDim text-[1.02rem] leading-8">
          <section className="space-y-4">
            <p>
              This page lays out the terms you&apos;re agreeing to when you use the Agentix website, book a call with us, or work with our team on an AI automation project. It&apos;s not the most exciting read, but it matters, so here it is in plain language.
            </p>
            <p>
              By browsing agentixsystem.com, filling out one of our forms, or engaging us for a project, you&apos;re agreeing to what&apos;s written below. If any part of it doesn&apos;t sit right with you, get in touch before going further; we&apos;re happy to talk it through.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">1. Who we are</h2>
            <p>
              Agentix System is an AI solutions company based in Dubai. We build AI automations that take repetitive work off your team&apos;s plate, things like outreach, support tickets, data entry, and reporting, and turn them into automated workflows that run inside the tools you already use. In this document, &quot;we&quot; and &quot;Agentix&quot; mean the same thing, and &quot;you&quot; means anyone using our site or our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">2. Using our website</h2>
            <p>
              You&apos;re welcome to browse, explore our agents, and reach out any time. A few ground rules while you&apos;re here:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don&apos;t copy or republish our content without asking first.</li>
              <li>Don&apos;t try to poke around, break, or overload the site or its backend.</li>
              <li>If you fill out a form (like our consultation request), give us real information. It helps us actually help you.</li>
            </ul>
            <p>
              If someone misuses the site or ignores these basics, we can limit or cut off their access. We don&apos;t do this often, but we reserve the right to.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">3. What our services actually cover</h2>
            <p>
              Every AI automation project we take on gets its own scope, deliverables, and timeline, agreed on separately once we understand what you need. That project agreement sits alongside these Terms, and if the two ever disagree on something, the project agreement wins.
            </p>
            <p>A few things worth knowing upfront:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Every build is different:</strong> Your agent is shaped around your workflow, your tools, and your data. That means results can vary from one business to the next, even for the same type of agent.
              </li>
              <li>
                <strong>We connect to your tools, not replace them:</strong> Whether it&apos;s Slack, HubSpot, Gmail, or Salesforce, our agents plug into what you&apos;re already running. If one of those platforms goes down or changes something on their end, that&apos;s outside our control.
              </li>
              <li>
                <strong>You stay in the loop:</strong> We build in guardrails and approval steps for anything that matters, but the final call on important business decisions is still yours to make.
              </li>
              <li>
                <strong>We don&apos;t promise specific outcomes:</strong> We aim for accuracy and reliability, and our numbers speak for themselves, but no one can guarantee a fixed result for your business. Automation helps, it doesn&apos;t run on autopilot with zero oversight.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">4. Payments</h2>
            <p>
              What you pay depends on the scope of your project and the budget tier you go with during the consultation. The actual schedule, deposit requirements, and invoicing details will be in your proposal or contract. In general:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments are due on the dates agreed in your contract.</li>
              <li>If a payment is late, we may pause active work until it&apos;s sorted.</li>
              <li>Refunds are looked at case by case, based on what&apos;s written in your specific agreement.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">5. Who owns what</h2>
            <p>
              Everything on our website, the copy, design, graphics, and logo, belongs to Agentix System. Please don&apos;t lift it and use it elsewhere without asking us first.
            </p>
            <p>
              As for the custom agent we build for you, ownership of that specific workflow setup is defined in your project contract. The tools, frameworks, and internal systems we use to build it, though, stay ours unless we agree in writing to hand them over.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">6. Data and privacy</h2>
            <p>
              Because our agents often plug into things like your CRM, inbox, or customer records, we take this part seriously.
            </p>
            <p>
              We only ever access what&apos;s needed to build and run your automation, nothing more. Your data is yours, we don&apos;t sell it, and we don&apos;t hand it off to third parties for marketing purposes. Anything you share with us during a consultation or project setup is used to deliver your service, full stop.
            </p>
            <p>
              For the deeper details on how we handle information, check our <a href="/policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">7. Where our responsibility ends</h2>
            <p>
              We put a lot of care into building automation that actually works. Still, no system, AI or otherwise, is completely immune to bugs or downtime, so here&apos;s where we draw the line legally:
            </p>
            <p>
              We&apos;re not on the hook for indirect or knock-on damages that come from using our site or services. If a third-party tool goes down, or if incorrect data was fed into the system on your end, that&apos;s not something we can be held responsible for either. And if a claim ever does come up, the most we&apos;d be liable for is capped at what you actually paid us for that service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">8. Things can change</h2>
            <p>
              We&apos;re constantly improving our agents, adding integrations, and tightening things up behind the scenes. That means features on our site or in our services might shift over time. If a change affects an active client&apos;s automation in a real way, we&apos;ll let you know directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">9. Ending the relationship</h2>
            <p>
              If someone breaks these Terms, or we suspect something fraudulent is going on, we can suspend or end access to our services. On your end, you&apos;re free to stop working with us whenever you&apos;d like, just check your project agreement for any specifics around notice or wind-down.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">10. Updates to this page</h2>
            <p>
              Every so often we&apos;ll need to tweak these Terms, maybe our services change, maybe the law does. Whenever that happens, we&apos;ll update the date at the top of this page. If you keep using our site or services after an update, that means you&apos;re on board with the new version.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">11. Governing law</h2>
            <p>
              These Terms follow the laws of the United Arab Emirates, and any disputes get handled under UAE jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-semibold text-xl text-text">12. Get in touch</h2>
            <p>
              Got a question about any of this? Don&apos;t overthink it, just reach out:
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li><strong>Phone:</strong> +971 52 803 6012</li>
              <li><strong>Email:</strong> info@agentixsystem.com</li>
              <li><strong>Address:</strong> Dubai, United Arab Emirates</li>
            </ul>
            <p>
              Happy to walk you through anything before you commit to a thing.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}