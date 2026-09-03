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
  cardImage: string;
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
    slug: "website-inquiry-form",
    name: "Website Inquiry Form Agent",
    tag: "Lead Gen",
    tagline: "Logs every website inquiry, alerts your team, and confirms with the client automatically.",
    metaDescription:
      "An AI agent that saves every website inquiry to Google Sheets, notifies your team instantly, and sends the client a confirmation email, so no lead slips through the cracks.",
    image: "/assets/inquiryForm.png",
    cardImage: "/assets/inquiryFormCard.png",
    imageAlt: "Website Inquiry Form Agent dashboard showing logged leads and sent confirmations",
    gallery: [
      { src: "/assets/inquiryForm.png", alt: "Website Inquiry Form Agent workflow and inquiry form" },
      { src: "/assets/inquiryForm.png", alt: "Website Inquiry Form Agent workflow overview" },
    ],
    lead: "Every inquiry form used to mean someone manually checking email, copying details into a sheet, and remembering to follow up. This agent does all of that the moment a form is submitted, so nothing gets missed and no one has to babysit an inbox.",
    body: [
      "When a visitor submits your website inquiry form, the agent catches it instantly through a webhook and writes the details straight into a Google Sheet, so you always have a clean, organized record of every lead that comes in.",
      "At the same time, it posts a message to your team's group chat so whoever's on point knows right away, and sends the client a confirmation email so they know their inquiry was received. No delays, no manual steps, no missed leads.",
    ],
    features: [
      "Captures form submissions instantly through a webhook",
      "Logs every inquiry automatically in Google Sheets",
      "Notifies your team the moment a new inquiry comes in",
      "Sends the client an automatic confirmation email",
    ],
    setup: "5 minutes",
    integrations: "Google Sheets, Google Chat, Gmail",
  },
 
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
