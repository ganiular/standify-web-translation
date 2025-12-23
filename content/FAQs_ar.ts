import { FAQDatum, FAQsType } from "../utils/types";

const FAQdata: FAQDatum[] = [
  {
    title: "Getting Started (Exhibitors)",
    items: [
      {
        question: "What is Standify?",
        answer:
          "Standify is a marketplace to post your exhibition stand project, compare verified suppliers, and manage delivery across the Gulf & MENA—end‑to‑end.",
      },
      {
        question: "Who is Standify for?",
        answer:
          "Exhibitors, service providers (builders, designers, AV, printing, logistics), and organizers who want a curated vendor pool.",
      },
      {
        question: "How do I post a project?",
        answer:
          "Click “Post your project”, add event/city/dates, budget, and needs. You’ll receive tailored proposals from verified providers.",
      },
      {
        question: "Which regions do you cover?",
        answer:
          "Primarily GCC/MENA (KSA, UAE, Qatar, Bahrain, Oman, Kuwait), with expanding EU support for cross‑region brands.",
      },
      {
        question: "Is it free to post a project?",
        answer: "Yes. Posting is free; you only pay when you book a provider.",
      },
    ],
  },

  {
    title: "Pricing & Payments",
    items: [
      {
        question: "How does pricing work?",
        answer:
          "You receive transparent quotes from multiple verified providers. Compare scope, materials, and timelines side‑by-side.",
      },
      {
        question: "Do you support milestone payments?",
        answer:
          "Yes. Pay in stages (design → production → handover) to protect both sides; each milestone is released when approved.",
      },
      {
        question: "Is bank transfer available?",
        answer:
          "Yes. Bank transfer is preferable because it often offers a cheaper transfer rate vs. standard card/processor fees. Reference your project ID; funds typically clear in 1–3 business days.",
      },
      {
        question: "What is the platform commission for suppliers?",
        answer:
          "The first three months for the supplier are free. After that, a 5% commission applies on transactions processed through the platform.",
      },
      {
        question: "Which currencies are supported?",
        answer:
          "Commonly USD, EUR, AED, SAR. Mention your preference in the brief and we’ll match providers accordingly.",
      },
      {
        question: "Refunds & disputes—how are they handled?",
        answer:
          "Milestones and platform messaging keep work traceable. Disputed milestones are paused until resolved per agreed scope.",
      },
    ],
  },

  {
    title: "Projects, Quotes & Timelines",
    items: [
      {
        question: "How fast will I get quotes?",
        answer:
          "Most briefs receive first responses within 24–72 business hours, depending on complexity and event date.",
      },
      {
        question: "Can I request multiple design options?",
        answer:
          "Yes. Note it in the brief. Some providers include one concept + revisions; extra concepts may be quoted.",
      },
      {
        question: "Can I upload drawings/brand guidelines?",
        answer:
          "Yes. Attach floorplans, logos, and brand manuals to improve accuracy and turnaround.",
      },
    ],
  },

  {
    title: "Providers & Verification",
    items: [
      {
        question: "How are providers vetted?",
        answer:
          "We verify identity, portfolio quality, references, insurance, and regional experience before granting badges.",
      },
      {
        question: "What do profile badges mean?",
        answer:
          "Badges can indicate Verified, Insured, Languages (AR/EN), Years on platform, and specific expertise (e.g., LED/AV, Wood).",
      },
      {
        question: "Can I invite my preferred vendor?",
        answer:
          "Yes. Invite them to respond on Standify so everything is tracked in one place.",
      },
      {
        question: "How are reviews handled?",
        answer:
          "Only completed jobs through Standify can be reviewed; no paid or unverifiable reviews.",
      },
    ],
  },

  {
    title: "Logistics & On‑Site",
    items: [
      {
        question: "Do providers handle installation and dismantling?",
        answer:
          "Yes. Quotes typically include fabrication, transport, on‑site build & dismantle, and handover to show management.",
      },
      {
        question: "Do you cover customs and shipping?",
        answer:
          "Choose providers with logistics & customs assistance; they’ll handle ATA Carnet or local clearance where required.",
      },
      {
        question: "Can I rent AV, furniture, or staff?",
        answer:
          "Yes. Add these in your brief or browse service categories (AV/LED walls, furniture, hosts).",
      },
    ],
  },

  {
    title: "Organizer Mode",
    items: [
      {
        question: "Can organizers use Standify for their exhibitors?",
        answer:
          "Yes. Organizer Mode enables curated vendors, recommendations, and progress tracking for exhibitors in one dashboard.",
      },
      {
        question: "Can we add event rules and deadlines?",
        answer:
          "Yes. Upload build rules, height limits, rigging notes, and key dates; providers see them in the brief.",
      },
      {
        question: "Can we whitelabel the experience?",
        answer:
          "Co‑branding and curated vendor pools are available on request.",
      },
    ],
  },

  {
    title: "Account & Support",
    items: [
      {
        question: "How do I become a verified provider?",
        answer:
          "Apply via “Become a Provider”: submit company docs, portfolio, insurance, and categories—review typically in 3–7 days.",
      },
      {
        question: "How do I contact support?",
        answer:
          "Use in‑app chat or email info@standify.com. For urgent show‑floor issues, use the escalation option in your project.",
      },
      {
        question: "Can I close my account?",
        answer:
          "Yes. Go to Settings → Account. Financial records are retained as required by law; public listings are removed.",
      },
    ],
  },
];

const FAQs: FAQsType = {
  title: "FAQs",
  description: "Frequently Asked Questions about Standify",
  data: FAQdata,
};

export default FAQs;
