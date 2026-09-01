// ============================================================
// CONTENT & IMAGES
// This is the only file you need to touch to add a new agent,
// change text, or swap in your own images.
// Copy an existing object, paste it below, and edit the values.
// The "slug" becomes the page URL: /agents/<slug>
// ============================================================

export type Product = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  metaDescription: string; // shown in Google search results — keep under ~155 chars
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  lead: string;
  body: string[];
  features: string[];
  setup: string;
  integrations: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "sales-outreach",
    name: "Sales Outreach Agent",
    tag: "Sales",
    tagline: "Finds leads, writes and sends personalized outreach on autopilot.",
    metaDescription:
      "An AI agent that researches leads, writes personalized cold emails, and follows up automatically — so your sales team stops copy-pasting.",
    image: "https://picsum.photos/seed/rovix-sales/800/500",
    imageAlt: "Sales Outreach Agent dashboard showing an automated email sequence",
    gallery: [
      { src: "https://picsum.photos/seed/rovix-sales-2/400/300", alt: "Sales Outreach Agent lead list view" },
      { src: "https://picsum.photos/seed/rovix-sales-3/400/300", alt: "Sales Outreach Agent reply tracking view" },
    ],
    lead: "Stop copy-pasting the same cold email fifty times a day. This agent researches each lead, writes a message that actually references their business, and follows up on the right day automatically.",
    body: [
      "The agent connects to your CRM and pulls fresh leads on a schedule you set. For each one, it reads the company's website and recent news, then drafts an outreach message that sounds like it was written by a person who did their homework.",
      "You approve the first few batches, then let it run. It tracks opens and replies, and pauses the sequence the moment someone responds so a human takes over the conversation.",
    ],
    features: [
      "Pulls leads from your CRM or a CSV upload",
      "Writes personalized first-touch and follow-up emails",
      "Pauses automatically when a prospect replies",
      "Reports weekly reply and meeting-booked rates",
    ],
    setup: "8 minutes",
    integrations: "HubSpot, Salesforce, Gmail",
  },
  {
    slug: "support-agent",
    name: "Customer Support Agent",
    tag: "Support",
    tagline: "Answers common tickets instantly and hands off the tricky ones.",
    metaDescription:
      "An AI support agent that answers common tickets instantly using your help docs and escalates anything unusual to your team with full context.",
    image: "https://picsum.photos/seed/rovix-support/800/500",
    imageAlt: "Customer Support Agent inbox showing an instantly answered ticket",
    gallery: [
      { src: "https://picsum.photos/seed/rovix-support-2/400/300", alt: "Customer Support Agent escalation summary view" },
      { src: "https://picsum.photos/seed/rovix-support-3/400/300", alt: "Customer Support Agent tone settings view" },
    ],
    lead: "Most support tickets are the same five questions asked a different way. This agent reads your help docs, answers those instantly, and routes anything unusual straight to a human with full context attached.",
    body: [
      "It sits on top of your existing helpdesk, whether that's Zendesk, Intercom or a shared inbox. New tickets are read, matched against your documentation and past resolved tickets, and answered if the agent is confident.",
      "If it isn't confident, the ticket goes to your team with a summary of what the customer needs and what's already been tried, so nobody starts from zero.",
    ],
    features: [
      "Learns from your existing help center and past tickets",
      "Escalates low-confidence tickets with a written summary",
      "Handles refunds and order lookups through your store API",
      "Tunable tone, from formal to casual",
    ],
    setup: "12 minutes",
    integrations: "Zendesk, Intercom, Shopify",
  },
  {
    slug: "data-entry",
    name: "Data Entry Agent",
    tag: "Operations",
    tagline: "Reads invoices, forms and PDFs and puts the numbers where they belong.",
    metaDescription:
      "An AI agent that reads invoices, receipts and forms, checks the totals, and writes clean data straight into your spreadsheet or accounting tool.",
    image: "https://picsum.photos/seed/rovix-data/800/500",
    imageAlt: "Data Entry Agent extracting fields from a scanned invoice",
    gallery: [
      { src: "https://picsum.photos/seed/rovix-data-2/400/300", alt: "Data Entry Agent flagged mismatch view" },
      { src: "https://picsum.photos/seed/rovix-data-3/400/300", alt: "Data Entry Agent spreadsheet sync view" },
    ],
    lead: "If someone on your team is still typing numbers from PDFs into a spreadsheet, this agent replaces that job. Drop in a document, get back structured, checked data.",
    body: [
      "The agent reads invoices, receipts, and forms in almost any layout, extracts the relevant fields, and cross-checks totals so obvious errors get flagged instead of silently entered.",
      "Everything lands in the sheet, database, or accounting tool you already use, with a log of what was extracted from where in case you need to double-check anything.",
    ],
    features: [
      "Reads scanned PDFs, photos, and digital documents",
      "Flags mismatched totals for manual review",
      "Writes directly to Google Sheets, Airtable, or QuickBooks",
      "Keeps a source-linked audit trail for every entry",
    ],
    setup: "5 minutes",
    integrations: "Google Sheets, Airtable, QuickBooks",
  },
  {
    slug: "content-writer",
    name: "Content Writer Agent",
    tag: "Marketing",
    tagline: "Turns a topic and an outline into a publish-ready first draft.",
    metaDescription:
      "An AI writing agent that learns your brand voice and turns a topic into a structured, editable first draft — ready for your CMS.",
    image: "https://picsum.photos/seed/rovix-content/800/500",
    imageAlt: "Content Writer Agent drafting an article outline",
    gallery: [
      { src: "https://picsum.photos/seed/rovix-content-2/400/300", alt: "Content Writer Agent tone learning view" },
      { src: "https://picsum.photos/seed/rovix-content-3/400/300", alt: "Content Writer Agent CMS export view" },
    ],
    lead: "Give it a topic, your brand's tone, and a few reference articles. It comes back with a structured draft you can edit instead of a blank page.",
    body: [
      "The agent studies a handful of your best-performing pieces to learn your voice, then builds an outline and drafts the full piece section by section, citing sources where needed.",
      "It's built to be edited, not published untouched. Think of it as removing the first two hours of every article, not the editor.",
    ],
    features: [
      "Learns tone from your existing content",
      "Builds an outline before writing, so structure is reviewable",
      "Suggests headlines and meta descriptions",
      "Exports straight to your CMS as a draft",
    ],
    setup: "6 minutes",
    integrations: "WordPress, Webflow, Notion",
  },
  {
    slug: "lead-qualification",
    name: "Lead Qualification Agent",
    tag: "Sales",
    tagline: "Scores inbound leads and books meetings with the good ones.",
    metaDescription:
      "An AI agent that scores inbound leads against your criteria, asks clarifying questions, and books meetings only with the ones worth a call.",
    image: "https://picsum.photos/seed/rovix-lead/800/500",
    imageAlt: "Lead Qualification Agent scoring dashboard",
    gallery: [
      { src: "https://picsum.photos/seed/rovix-lead-2/400/300", alt: "Lead Qualification Agent scoring criteria view" },
      { src: "https://picsum.photos/seed/rovix-lead-3/400/300", alt: "Lead Qualification Agent calendar booking view" },
    ],
    lead: "Not every form submission deserves a sales call. This agent asks the right follow-up questions, scores the lead against your criteria, and books time directly with reps for the ones worth talking to.",
    body: [
      "When a new lead comes in, the agent reviews their answers and company details, asks a short clarifying question over email or chat if something's missing, and scores them against the criteria you define.",
      "Qualified leads get a calendar link automatically. The rest get routed to a nurture sequence instead of a rep's calendar.",
    ],
    features: [
      "Custom scoring criteria, no code required",
      "Asks clarifying questions before scoring",
      "Books meetings directly on rep calendars",
      "Routes unqualified leads to nurture campaigns",
    ],
    setup: "10 minutes",
    integrations: "Calendly, HubSpot, Slack",
  },
  {
    slug: "email-automation",
    name: "Email Automation Agent",
    tag: "Operations",
    tagline: "Reads your inbox, drafts replies, and files what doesn't need one.",
    metaDescription:
      "An AI agent that triages a shared inbox, drafts replies in your voice for approval, and files the messages that don't need a response.",
    image: "https://picsum.photos/seed/rovix-email/800/500",
    imageAlt: "Email Automation Agent inbox triage view",
    gallery: [
      { src: "https://picsum.photos/seed/rovix-email-2/400/300", alt: "Email Automation Agent draft reply view" },
      { src: "https://picsum.photos/seed/rovix-email-3/400/300", alt: "Email Automation Agent weekly summary view" },
    ],
    lead: "A shared inbox that gets fifty emails a day doesn't need fifty decisions from a human. This agent triages, drafts replies for review, and archives the noise.",
    body: [
      "Every incoming email is classified — needs a reply, needs a person, or needs nothing. For the first group, a draft reply is prepared in your voice and left for a quick approve-and-send.",
      "Over time it learns which threads you always forward, always ignore, or always reply to the same way, and handles more of the pattern on its own.",
    ],
    features: [
      "Classifies and triages every incoming email",
      "Drafts replies for one-click approval",
      "Learns your recurring patterns over time",
      "Weekly summary of what was handled automatically",
    ],
    setup: "7 minutes",
    integrations: "Gmail, Outlook, Slack",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
