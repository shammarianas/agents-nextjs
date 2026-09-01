// ============================================================
// CONTENT for the trust-building sections on the home page:
// Integrations, How We Work, Process Layers, and FAQ.
// Edit the arrays below to change copy — no need to touch
// the component files.
// ============================================================

export const TOOLS = [
  { name: "Slack", slug: "slack" },
  { name: "Notion", slug: "notion" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Gmail", slug: "gmail" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Stripe", slug: "stripe" },
  { name: "Airtable", slug: "airtable" },
  { name: "Shopify", slug: "shopify" },
  { name: "GitHub", slug: "github" },
  { name: "Calendly", slug: "calendly" },
  { name: "Asana", slug: "asana" },
  { name: "Zapier", slug: "zapier" },
  { name: "Dropbox", slug: "dropbox" },
  { name: "Trello", slug: "trello" },
];

export const HOW_WE_WORK = [
  {
    icon: "lock",
    title: "Your data stays yours",
    body: "Agents run on top of your existing infrastructure. We never store or train on your business data.",
  },
  {
    icon: "doc",
    title: "Full audit trail",
    body: "Every action is logged. See exactly what ran, when, and why — any time you need to check.",
  },
  {
    icon: "check",
    title: "You stay in control",
    body: "Human approval is built in for anything consequential. The agent handles the routine.",
  },
  {
    icon: "plug",
    title: "No new tools required",
    body: "We build into the stack you already run. If it has an API, we can connect it — no rip and replace.",
  },
];

export const PROCESS_LAYERS = [
  {
    number: "01",
    title: "Reasoning layer",
    body: "Reads context, classifies intent, and decides what needs to happen next.",
  },
  {
    number: "02",
    title: "Rules and guardrails layer",
    body: "Every action is checked against policies you define before it's allowed to run.",
  },
  {
    number: "03",
    title: "Deterministic integration layer",
    body: "Executes through your real APIs and systems — never a guess at what an interface looks like.",
  },
  {
    number: "04",
    title: "Audit and oversight layer",
    body: "Every action is logged, reversible, and reviewable any time something needs a second look.",
  },
];

export const FAQS = [
  {
    q: "What if the agent makes a mistake?",
    a: "High-stakes actions always require human confirmation — the agent pauses and waits rather than proceeding when confidence is below a set threshold. Every action is logged, so anything unusual is caught early.",
  },
  {
    q: "Who has access to our data?",
    a: "Only the systems the agent needs to complete its task, scoped by permission. You control exactly what it can see and what it can do at every step.",
  },
  {
    q: "How long until the first automation is live?",
    a: "Most teams see a first working agent within one to two weeks, depending on how many systems it needs to connect to.",
  },
  {
    q: "Do we need technical staff to run this?",
    a: "No. We handle the setup and integration work. Your team reviews and approves — no code or maintenance required on your side.",
  },
  {
    q: "What happens when our tools or processes change?",
    a: "Agents are built to be updated, not rebuilt. We adjust the rules and integrations as your stack or workflow evolves.",
  },
  {
    q: "What happens after the engagement ends?",
    a: "The agents and everything they touch stay fully yours, running inside your own infrastructure with documentation handed over.",
  },
  {
    q: "Is this the same as the AI tools we've already tried?",
    a: "Most off-the-shelf AI tools guess at actions through a chat interface. This is built for your specific workflow, with guardrails, audit logs, and real integrations — not a chatbot layered on top.",
  },
];
