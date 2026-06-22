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
] as const;

export const heroStats = [
  { term: "Dossier", value: "01 · 2026" },
  { term: "Role", value: "Project Mgr · Founding GTM" },
  { term: "Base", value: "Hanoi · Singapore" },
  { term: "Languages", value: "EN · VI · FR" },
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
  },
  {
    live: true,
    period: "Live · 2026 — Now",
    kind: "Founding BD & GTM",
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
      { num: "8", label: "Paying B2B in 3 Mo." },
      { num: "30", label: "Founder Discovery Calls" },
      { num: "6", label: "Channels Unified" },
    ],
    link: { href: "https://simplideliver.com", label: "simplideliver.com" },
  },
  {
    period: "2024 — 2025",
    kind: "Growth & Brand",
    title: "DarkHorseStocks",
    tagline: "From scratch to 46,000+ subscribers across four channels.",
    desc: (
      <>
        Led growth across digital channels for an AI-powered equity research
        platform — LinkedIn, Instagram, Twitter, and Telegram.{" "}
        <Em>Scaled the Telegram subscriber base to 46,000+</Em> as the primary
        distribution channel. Translated user needs into platform communication,
        ran branded campaigns, and supported lead generation through LinkedIn
        outreach and email capture.
      </>
    ),
    stats: [
      { num: "46k+", label: "Telegram Subscribers" },
      { num: "10k+", label: "Instagram Following" },
      { num: "5.2k+", label: "Twitter Following" },
    ],
    link: { href: "https://www.darkhorsestocks.in", label: "darkhorsestocks.in" },
  },
  {
    period: "Dec 2025 — May 2026",
    kind: "Strategy Consultant",
    title: "Ferrero",
    tagline: "Rebuilding TicTac branding for Asia-Pacific.",
    desc: (
      <>
        Six-month consultancy on <Em>TicTac&apos;s APAC repositioning</Em>, with
        the first regional campaign launching in Singapore. Led brand
        repositioning end-to-end: consumer and sales data analysis, competitor
        benchmarking and SWOT across FMCG confectionery, functional and emotional
        brand insight, and a customer-engagement playbook combining digital and
        experiential.
      </>
    ),
    stats: [
      { num: "APAC", label: "Regional Scope" },
      { num: "SG", label: "Launch Market" },
      { num: "4", label: "Strategy Workstreams" },
    ],
    staticLink: { label: "TicTac · Ferrero APAC", right: "—" },
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
    num: "01",
    period: "2019 / 2023",
    title: "Diplomatic Academy of Vietnam",
    sub: "B.A. International Communication & Culture — Top 5% · GPA 3.62/4.0 · IELTS 8.0",
    note: "Political and cultural foundations — building proposals with depth, vision, and influence through behavioural understanding.",
  },
  {
    num: "02",
    period: "2022 / 2023",
    title: "Dell Technologies APAC",
    sub: "Sales & Digital Marketing — OEM Solutions · Singapore & Vietnam",
    note: "The bridge between enterprise sales and digital marketing — the cadence of global B2B customers.",
  },
  {
    num: "03",
    period: "2023 / 2024",
    title: "UNIQLO Manager Candidate",
    sub: "Operations & Team Leadership — 54-person retail floor · Japan & Vietnam",
    note: "Corporate discipline — the balance between people management and generating revenue at scale.",
  },
  {
    num: "04",
    period: "2024 / Present",
    title: "Business Project Management",
    sub: "DarkHorseStocks · ShinobiData · SimpliDeliver · Ferrero",
    note: "Founding GTM on two AI products — Singapore & India. The room where strategy collapses into shipping.",
    active: true,
  },
  {
    num: "05",
    period: "2025 / 2026",
    title: "INSEAD Business School",
    sub: "Master in Management — Singapore & France",
    note: "Building businesses holistically — marketing, operations, logistics, entrepreneurship — and how they link.",
  },
  {
    num: "06",
    period: "Online",
    title: "University of Pennsylvania",
    sub: "Business & Marketing — Wharton frameworks for brand, pricing, and growth",
    note: "Continuous craft — the canonical frameworks behind brand strategy, customer value, and pricing.",
  },
];

export type Campaign = {
  year: string;
  tag: string;
  tagAccent?: boolean;
  title: string;
  desc: string;
};

export const campaigns: Campaign[] = [
  {
    year: "2026",
    tag: "Luxury Retail",
    title: "Chanel",
    desc: "Mystery shopping benchmark across Chanel, Dior, and Guerlain — decoding the rituals of luxury service and the signals that turn experience into willingness to pay.",
  },
  {
    year: "2026",
    tag: "Editorial Beauty",
    title: "L'Oréal",
    desc: "Editorial-led beauty campaign direction — launch storytelling, branded-experience planning, and creator partnership architecture for premium category entry.",
  },
  {
    year: "2026",
    tag: "Premium Lifestyle",
    title: "Soirée by Sephora",
    desc: "Nightwear collection launch concept — moodboard direction, brand narrative, and event architecture for a premium evening ritual targeted at urban Gen Z.",
  },
  {
    year: "2026",
    tag: "Brand Vision",
    title: "Filé",
    desc: "Multi-page strategic concept — positioning, content rollout, campaign architecture, and brand vision for 2026 launch. Built end-to-end from foundation to go-to-market.",
  },
  {
    year: "2022",
    tag: "Young Lion · Top 3/1200",
    tagAccent: true,
    title: "AB InBev",
    desc: "Market-penetration strategy for a global beverage portfolio entering Vietnam — segmentation, retail execution, and growth levers across modern and traditional trade.",
  },
  {
    year: "2022",
    tag: "HTKD · Top 3/1400",
    tagAccent: true,
    title: "MB Bank",
    desc: "Financial-services campaign concept — digital customer journey design, engagement architecture, and conversion-focused activation reaching a younger banking demographic.",
  },
  {
    year: "2022",
    tag: "Web3 Strategy",
    title: "NFT Eazy Empire",
    desc: "Launch positioning for a Web3 collectibles platform — creator activation framework, tokenomics narrative, and a first-10,000-holder community playbook.",
  },
  {
    year: "2022",
    tag: "Cultural Awareness",
    title: "Violent Communication",
    desc: "Awareness campaign reframing the language of digital conflict — translating Nonviolent Communication theory into culture-forward, short-form content native to Gen Z.",
  },
];

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
    title: "International Communications — Diplomatic Academy",
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
  { label: "Languages", value: "EN · VI · FR (working)" },
];
