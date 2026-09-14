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
  // gallery: { src: string; alt: string }[];
  lead: string;
  body: string[];
  features: string[];
  benefits: { title: string; description: string }[];
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
    image: "/assets/inquiryFormCard.png",
    cardImage: "/assets/inquiryFormCard.png",
    imageAlt: "Website Inquiry Form Agent dashboard showing logged leads and sent confirmations",
    // gallery: [
    //   { src: "/assets/inquiryForm.png", alt: "Website Inquiry Form Agent workflow and inquiry form" },
    //   { src: "/assets/inquiryForm.png", alt: "Website Inquiry Form Agent workflow overview" },
    // ],
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
    benefits: [
      { title: "Save Time", description: "No manual checking, copying, or forwarding of messages." },
      { title: "Improve Response", description: "Your team is alerted instantly, so replies go out faster." },
      { title: "No Manual Work", description: "The entire process, from form to confirmation, runs on its own." },
      { title: "Boost Efficiency", description: "Your team focuses on responding, not on tracking down new messages." },
    ],
    setup: "3 days",
    integrations: " Google Sheets, Google Chat, Gmail",
  },
  {
    slug: "contact-us-form-agent",
    name: "Contact Us Form Agent",
    tag: "Lead Gen",
    tagline: "Automate your Contact Us form: store, notify, and confirm, all in one flow.",
    metaDescription:
      "An AI agent that automates your website's Contact Us form: stores every message in Google Sheets, alerts your team instantly, and sends the client a confirmation, all without manual work.",
    image: "/assets/contactUsForm.png",
    cardImage: "/assets/contactUsForm.png",
    imageAlt: "Contact Us Form Agent dashboard showing logged messages and sent confirmations",

    lead: "When a client submits a message through your Contact Us form, this agent takes over. It stores the message, alerts your team, and confirms with the client, automatically, in seconds.",
    body: [
      "The moment someone fills out your Contact Us form (name, email, subject, message), the agent catches it through a webhook and stores it in Google Sheets right away, so every inquiry is recorded and nothing gets lost.",
      "It then instantly sends the message to your team's group chat, so whoever's responsible sees it immediately, and sends the client an automatic thank-you confirmation, so they know their message actually went through. The whole thing runs without anyone touching an inbox.",
    ],
    features: [
      "Automatically stores every Contact Us message in Google Sheets, organized and ready to review.",
      "Instantly sends the message to your team's chat group, so the right person knows the moment a new inquiry comes in.",
      "Automatically sends a thank-you message to the client, confirming their inquiry was received.",
    ],
    benefits: [
      { title: "Save Time", description: "No manual checking, copying, or forwarding of messages." },
      { title: "Improve Response", description: "Your team is alerted instantly, so replies go out faster." },
      { title: "No Manual Work", description: "The entire process, from form to confirmation, runs on its own." },
      { title: "Boost Efficiency", description: "Your team focuses on responding, not on tracking down new messages." },
    ],
    setup: "3 days",
    integrations: " Contact Us Form, Google Sheets, Google Chat, Gmail",
  },

  {
    slug: "ai-website-assistant-chatbot",
    name: "AI Website Assistant",
    tag: "Support",
    tagline: "A RAG-powered chatbot that talks like a real team member, not a script.",
    metaDescription:
      "An advanced AI assistant chatbot trained on your website data using RAG. It answers customer queries naturally, explains your services, shares your portfolio, and connects visitors with your team, all in human-like conversation.",
    image: "/assets/aiAssistant.png",
    cardImage: "/assets/aiAssistant.png",
    imageAlt: "AI Website Assistant chatbot answering a visitor query in a human-like conversation",

    lead: "Most chatbots sound like chatbots: rigid, robotic, and useless the moment a question isn't in their script. This one is different. Built on RAG (Retrieval-Augmented Generation), it actually reads and understands your website content, so it answers like someone who works there, not a bot reading from a menu.",
    body: [
      "The agent is connected to a knowledge base pulled directly from your website: services, pricing, FAQs, past work, everything. When a visitor asks a question, it searches that knowledge base in real time, pulls the most relevant information, and replies in natural, human-like language instead of canned responses.",
      "It can explain what you offer, walk someone through your portfolio, and if a visitor wants to talk to a real person, it smoothly hands them off to your team. Every conversation is remembered within the session, so it doesn't lose context halfway through, the same way a good salesperson wouldn't.",
    ],
    features: [
      "Searches your actual website content in real time to give accurate, up-to-date answers instead of guessing.",
      "Responds naturally and contextually, not with robotic, pre-scripted replies.",
      "Walks visitors through what you offer and answers follow-up questions in detail.",
      "Shares relevant work samples or case studies based on what the visitor is asking about.",
      "Connects visitors with your team directly when a conversation needs a human touch.",
      "Remembers context throughout the conversation, so it doesn't repeat itself or lose track.",
    ],
    benefits: [
      { title: "Always Available", description: "Answers visitor questions instantly, 24/7, with no waiting on a human reply." },
      { title: "Feels Human", description: "Visitors get natural, relevant answers instead of frustrating, robotic chatbot loops." },
      { title: "More Qualified Leads", description: "Visitors get real answers upfront, so the ones who reach your team are already interested." },
      { title: "Less Repetitive Work", description: "Your team stops answering the same basic questions over and over." },
    ],
    setup: "3 days",
    integrations: " Pinecone, OpenAI, Google Sheets",
  },

  {
    slug: "hospitality-booking-concierge-agent",
    name: "Hospitality Booking Concierge",
    tag: "Hospitality",
    tagline: "A WhatsApp AI concierge that handles bookings, changes, and guest queries end-to-end.",
    metaDescription:
      "An AI concierge agent that talks to guests on WhatsApp, manages bookings, cancellations, and reminders, and automatically creates and updates contacts in your CRM. Built for hotels, resorts, and hospitality businesses.",
    image: "/assets/hospitalityConcierge.png",
    cardImage: "/assets/hospitalityConcierge.png",
    imageAlt: "Hospitality Booking Concierge chatting with a guest on WhatsApp about their booking",

    lead: "Guests don't want to call a front desk or fill out a form, they want to message on WhatsApp and get an answer right away. This agent acts as a full concierge: it checks availability, books rooms, handles cancellations, and keeps your CRM updated, all inside a single WhatsApp conversation.",
    body: [
      "When a guest sends a message on WhatsApp, whether it's a first-time inquiry or a returning guest asking about their stay, the agent immediately checks your CRM (HubSpot) for a matching contact. If the guest is new, it creates a fresh contact automatically with their phone number and details pulled straight from the conversation. If they already exist, it retrieves their profile and past interaction history, so the conversation picks up with full context instead of starting from zero every time.",
      "From there, the AI concierge takes over like an actual front desk agent would. It understands what the guest is asking, whether that's general questions about the property, checking if a room is available on specific dates, creating a brand new booking, modifying an existing reservation, or cancelling one altogether. It handles all of this directly inside the chat, in natural back-and-forth conversation, without the guest ever needing to fill out a separate form or wait for a callback.",
      "The agent also knows its limits. If a guest asks something outside its scope, or specifically requests to speak with a real person, it escalates the conversation to your staff instead of guessing or giving a wrong answer. On top of that, it automatically sends booking reminders ahead of a guest's stay, so no one shows up unprepared or forgets a reservation.",
      "Every conversation is tied to the guest's phone number and remembered across messages, so if they message again days later, the agent still knows the context of their previous conversation. The complete conversation history is also saved and kept updated, giving your team a searchable record of every guest interaction without anyone having to manually log it.",
    ],
    features: [
      "WhatsApp-Native Conversations: Guests interact entirely through WhatsApp, using an interface they already know, with no app downloads, no forms, and no waiting on hold.",
      "Automatic CRM Contact Sync: Searches your CRM for an existing contact the moment a guest messages, and creates a new one instantly if they're not found, so every guest is properly tracked from their very first message.",
      "Real-Time Room Availability Check: Checks live availability before confirming anything, so guests never get told a room is open when it's actually booked.",
      "Full Booking Lifecycle Management: Creates new bookings, updates existing ones, and processes cancellations, all inside the same conversation, without needing a separate booking portal or manual staff input.",
      "Automated Booking Reminders: Sends guests a reminder message ahead of their check-in date, reducing no-shows and last-minute confusion.",
      "Smart Staff Escalation: Recognizes when a request needs a human touch, whether it's a complex complaint or a direct request, and hands it off to your team instead of trying to force an answer.",
      "Per-Guest Conversation Memory: Remembers each guest's conversation history individually, tied to their phone number, so replies stay consistent and personal even across multiple sessions.",
      "Persistent Conversation Logging: Automatically saves and updates the full conversation log, giving your team an always-current, reviewable record of every guest interaction.",
    ],
    benefits: [
      { title: "24/7 Guest Response", description: "Guests get instant, natural replies on WhatsApp at any hour, so you're never losing a booking just because it came in overnight or during a busy shift." },
      { title: "Fewer Missed & Double Bookings", description: "Live availability checks happen before any booking is confirmed, cutting down on scheduling errors and awkward overbooking situations." },
      { title: "Organized, Up-to-Date Guest Records", description: "Every contact, inquiry, and booking is automatically logged and kept current in your CRM, with no one manually re-typing guest details." },
      { title: "Fewer No-Shows", description: "Automated reminders keep bookings top of mind for guests, reducing the number of last-minute cancellations or forgotten reservations." },
      { title: "Less Manual Front Desk Work", description: "Routine tasks like bookings, changes, and cancellations are handled without staff needing to step in, freeing your team to focus on guests who are actually on-site." },
      { title: "Consistent Guest Experience", description: "Because the agent remembers each guest's history, conversations feel continuous and personal instead of repetitive or robotic." },
    ],
    setup: "3 days",
    integrations: " WhatsApp, HubSpot, OpenAI, Google Sheets",
},

];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
