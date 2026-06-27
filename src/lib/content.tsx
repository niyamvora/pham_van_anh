import type { ReactNode } from "react";
import { Em } from "@/components/dossier/primitives/Highlights";

/* ============================================================
   All copy for the dossier lives here so the section components
   stay purely presentational and data-driven.
   ============================================================ */

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#campaigns", label: "Campaigns" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroStats = [
  { term: "Dossier", value: "01 · 2026" },
  { term: "From", value: "Pham Thi Van Anh" },
  { term: "Role", value: "Founding GTM · BD Lead" },
  { term: "Base", value: "Hanoi · Singapore" },
] as const;

export const marqueeItems = [
  "Sales & Business Development",
  "Partnerships & Go-to-Market",
  "CRM & Sales Tools",
  "Analytics & Data",
  "Digital Marketing",
  "AI Productivity Tools",
] as const;

export type Stat = { num: string; label: string };

export type Project = {
  live?: boolean;
  /** Live badge label or plain date range shown top-left. */
  period: string;
  /** Discipline label shown top-right. */
  kind: string;
  title: string;
  tagline: string;
  desc: ReactNode;
  stats: Stat[];
  /** External link footer (omit for a static, non-linked footer). */
  link?: { href: string; label: string };
  /** Static footer used when there is no outbound link. */
  staticLink?: { label: string; right: string };
  /** ID matching the caseStudies.ts entry, enables "Read case study →" button. */
  caseStudyId?: string;
};

export const projects: Project[] = [
  {
    live: true,
    period: "Live · 2025 — Now",
    kind: "Founding GTM",
    title: "ShinobiData",
    tagline: "Bloomberg-grade equity research, queryable from any AI agent.",
    desc: (
      <>
        US equity research platform — 10,000+ tickers, 200+ screener fields,
        sub-50ms filters, natural-language queries in 5 languages.{" "}
        <Em>
          The first equity research MCP server listed on the official Anthropic
          MCP Registry
        </Em>
        , queryable natively from Claude, ChatGPT, Gemini, and Perplexity via
        OAuth 2.1.
      </>
    ),
    stats: [
      { num: "10k+", label: "Tickers Indexed" },
      { num: "5", label: "AI Agents Integrated" },
      { num: "v1.0", label: "On Anthropic Registry" },
    ],
    link: { href: "https://shinobidata.com", label: "shinobidata.com" },
    caseStudyId: "shinobidata",
  },
  {
    live: true,
    period: "Live · 2026 — Now",
    kind: "Founding BD & GTM Lead",
    title: "SimpliDeliver",
    tagline: "Six channels, one inbox. Talk to every customer from one screen.",
    desc: (
      <>
        Multi-channel CRM unifying WhatsApp, Zalo, Facebook, Instagram, Shopee,
        and TikTok in a single workspace. <Em>Official Meta Business Partner</Em>
        , SOC 2 compliant, 99.9% uptime. I took the product from zero brand
        recognition to <Em>8 paying B2B enterprises in the first 3 months</Em> —
        after 30 founder-level discovery interviews across Vietnam, India, and
        Malaysia.
      </>
    ),
    stats: [
      { num: "8", label: "Paying B2B Customers in 3 Mo." },
      { num: "30", label: "Founder Discovery Calls" },
      { num: "6", label: "Channels Unified" },
    ],
    link: { href: "https://simplideliver.com", label: "simplideliver.com" },
    caseStudyId: "simplideliver",
  },
  {
    period: "2024 — 2025",
    kind: "Business Project Manager · Growth & Brand",
    title: "DarkHorseStocks",
    tagline: "From scratch to 46,000+ subscribers across four channels.",
    desc: (
      <>
        Led growth across digital channels for an AI-powered equity research
        platform — LinkedIn, Instagram, Twitter, and Telegram.{" "}
        <Em>Scaled the Telegram subscriber base to 46,000+</Em> as the primary
        distribution channel. Collaborated with the founding team to translate
        user needs into platform communication and growth requirements. Built
        business and investment-focused content across Quora and social media,
        managed branded campaigns, and supported lead generation through LinkedIn
        outreach and email capture.
      </>
    ),
    stats: [
      { num: "46k+", label: "Telegram Subscribers" },
      { num: "10k+", label: "Instagram Following" },
      { num: "5.2k+", label: "Twitter Following" },
    ],
    link: { href: "https://www.darkhorsestocks.in", label: "darkhorsestocks.in" },
    caseStudyId: "darkhorsestocks",
  },
  {
    period: "Dec 2025 — May 2026",
    kind: "Strategic Marketing Consultant",
    title: "Ferrero",
    tagline: "Rebuilding TicTac branding for Asia-Pacific.",
    desc: (
      <>
        Six-month consultancy on <Em>TicTac&apos;s APAC repositioning</Em>, with
        the first regional campaign launching in Singapore. Led brand
        repositioning end-to-end through four workstreams: consumer and sales
        data analysis identifying purchase drivers and trend signals; competitor
        benchmarking and SWOT across FMCG confectionery; functional and emotional
        brand insight development for regional strategy; and a
        customer-engagement playbook combining digital touchpoints with
        experiential campaigns.
      </>
    ),
    stats: [
      { num: "APAC", label: "Regional Scope" },
      { num: "SG", label: "Launch Market" },
      { num: "4", label: "Strategy Workstreams" },
    ],
    staticLink: { label: "TicTac · Ferrero APAC", right: "—" },
    caseStudyId: "ferrero",
  },
];

export type CareerRow = {
  num: string;
  period: string;
  title: string;
  sub: string;
  note: string;
  active?: boolean;
};

export const career: CareerRow[] = [
  {
    num: "i.",
    period: "2019 / 2023",
    title: "Diplomatic Academy of Vietnam",
    sub: "B.A. International Communication & Culture — Top 5% · GPA 3.62/4.0 · IELTS 8.0",
    note: "Learned political and cultural foundations — how to build marketing proposals with depth, vision, and influence through cultural and behavioural understanding.",
  },
  {
    num: "ii.",
    period: "2022 / 2023",
    title: "Dell Technologies APAC",
    sub: "Sales & Digital Marketing — OEM Solutions · Singapore & Vietnam",
    note: "Learned the bridge between enterprise sales and digital marketing — and the cadence of working with global B2B customers.",
  },
  {
    num: "iii.",
    period: "2023 / 2024",
    title: "UNIQLO Manager Candidate",
    sub: "Operations & Team Leadership — 54-person retail floor · Japan & Vietnam",
    note: "Learned corporate discipline — the balance between people management and generating revenue inside a global business.",
  },
  {
    num: "iv.",
    period: "2024 / Present",
    title: "Business Project Management",
    sub: "DarkHorseStocks · ShinobiData · SimpliDeliver · Ferrero",
    note: "Founding GTM on two AI products — Singapore & India. The room where strategy collapses into shipping.",
    active: true,
  },
  {
    num: "v.",
    period: "2025 / 2026",
    title: "ESSEC Business School",
    sub: "Master in Marketing Management and Digital — Singapore & France",
    note: "Building businesses holistically across marketing, operations, logistics, and entrepreneurship, and how they link together.",
  },
  {
    num: "vi.",
    period: "Online",
    title: "University of Pennsylvania",
    sub: "Business & Marketing — Wharton frameworks for brand, pricing, and growth",
    note: "Continuous marketing craft — sharpening the canonical frameworks behind brand strategy, customer value, and pricing.",
  },
];

export type Campaign = {
  year: string;
  tag: string;
  tagAccent?: boolean;
  title: string;
  desc: string;
};

/** Judged competition work */
export const competitionWins: Campaign[] = [
  {
    year: "2022",
    tag: "Young Lion · Top 3 / 1,200",
    tagAccent: true,
    title: "AB InBev",
    desc: "Market entry strategy for a global beverage portfolio launching in Vietnam. Built segmentation logic, channel activation playbooks, and retail execution across both modern and traditional trade.",
  },
  {
    year: "2022",
    tag: "HTKD · Top 3 / 1,400",
    tagAccent: true,
    title: "MB Bank",
    desc: "Financial services campaign concept. Designed the digital customer journey, engagement architecture, and conversion activation targeting a younger banking demographic.",
  },
  {
    year: "2022",
    tag: "Web3 Brand Strategy",
    title: "NFT Eazy Empire",
    desc: "Launch positioning for a Web3 collectibles platform. Designed the creator activation framework, tokenomics narrative, and a first 10,000 holder community playbook for early stage Web3 growth.",
  },
  {
    year: "2022",
    tag: "Cultural Awareness",
    title: "Violent Communication",
    desc: "Awareness campaign reframing the language of digital conflict by translating Nonviolent Communication theory into culture forward, short form content native to Gen Z platforms.",
  },
];

/** ESSEC & independent strategic concepts */
export const strategicConcepts: Campaign[] = [
  {
    year: "2026",
    tag: "Luxury Retail · Concept",
    title: "Chanel",
    desc: "Mystery shopping benchmark across Chanel, Dior, and Guerlain, decoding the rituals of luxury service, brand value delivery, and the behavioural signals that turn experience into willingness to pay.",
  },
  {
    year: "2026",
    tag: "Editorial Beauty · Concept",
    title: "L'Oréal",
    desc: "Editorial beauty campaign direction. Built the launch storytelling, branded experience planning, and creator partnership architecture for premium category entry in a saturated market.",
  },
  {
    year: "2026",
    tag: "Premium Lifestyle · Concept",
    title: "Soirée by Sephora",
    desc: "Nightwear collection launch concept. Designed the moodboard direction, brand narrative, and event architecture for a premium evening ritual targeted at urban Gen Z.",
  },
  {
    year: "2026",
    tag: "Brand Vision · Concept",
    title: "Filé",
    desc: "Multi page strategic marketing concept spanning positioning, content rollout, campaign architecture, and brand vision for 2026 launch. Built end to end from brand foundation to go to market roadmap.",
  },
];

/** Legacy combined export — kept for any component that still imports `campaigns` */
export const campaigns: Campaign[] = [...competitionWins, ...strategicConcepts];

export type Award = {
  year: string;
  title: string;
  detail: string;
  result: string;
  resultMuted?: boolean;
};

export const recognition: Award[] = [
  {
    year: "2024",
    title: "Japan Youth Summit — Sustainable Business Idea Summit",
    detail: "Sustainability strategy track",
    result: "Best Delegate",
  },
  {
    year: "2017",
    title: "Kaohsiung International Invention & Design Expo",
    detail: "Taiwan · International field",
    result: "Bronze Medal",
    resultMuted: true,
  },
  {
    year: "2022",
    title: "Vietnam Young Lion — Student Leagues",
    detail: "Most prestigious marketing competition · 1,200 entrants",
    result: "Top 3",
  },
  {
    year: "2022",
    title: "Hanh Trinh Kinh Doanh — Business Case Study",
    detail: "Nationwide · 1,400 entrants",
    result: "Top 3",
  },
  {
    year: "2021",
    title: "International Communications — Diplomatic Academy of Vietnam",
    detail: "MA cohort · 200 students",
    result: "Top 2",
  },
];

export type Capability = { title: string; items: string[] };

export const capabilities: Capability[] = [
  {
    title: "Go-to-Market",
    items: [
      "Zero-to-first-customer playbooks",
      "Outbound pipeline construction",
      "C-suite discovery interviews",
      "BANT qualification frameworks",
      "Pipeline velocity & conversion",
      "Multi-country GTM motions",
    ],
  },
  {
    title: "Product & Partnerships",
    items: [
      "Product-market fit validation",
      "Founding-team operations",
      "Strategic partnership building",
      "Cross-cultural enterprise (Asia ↔ EU)",
      "Pricing & deal structuring",
      "Roadmap-to-revenue coordination",
    ],
  },
  {
    title: "Marketing & AI",
    items: [
      "Brand positioning & narrative",
      "Multi-channel campaign architecture",
      "Analytics, attribution, dashboards",
      "AI workflow design (Claude, GPT, Cursor)",
      "Content systems & editorial direction",
      "Community & subscription growth",
    ],
  },
];

export type ContactLink = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "vananhcindy02@gmail.com",
    href: "mailto:vananhcindy02@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "pham-thi-van-anh ↗",
    href: "https://www.linkedin.com/in/pham-thi-van-anh-072265232/",
    external: true,
  },
  { label: "Phone", value: "+65 8158 6466", href: "tel:+6581586466" },
  { label: "Based", value: "Hanoi · Singapore" },
  { label: "Languages", value: "English · Vietnamese · French (working)" },
];
