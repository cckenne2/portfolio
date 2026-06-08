/**
 * Homepage content, sourced from Caleb Kennedy's résumé. Kept separate from
 * presentation so copy and numbers can be edited without touching components.
 *
 * Every metric and claim here is résumé-backed. Professional work is described
 * at a public, high level only — no proprietary data, source, customer
 * information, or internal architecture is exposed.
 */

export type Metric = {
  value: number;
  /** Rendered before the animated number, e.g. "<". */
  prefix?: string;
  /** Rendered after the animated number, e.g. "+", "%", "s". */
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  {
    value: 42000,
    suffix: "+",
    label: "Product records enriched by an LLM pipeline — in 3 weeks",
  },
  {
    value: 20000,
    suffix: "+",
    label: "Customer records deduplicated at 90% accuracy",
  },
  {
    value: 7,
    prefix: "<",
    suffix: "s",
    label: "Per-product RAG recommendation, replacing manual catalog lookup",
  },
  {
    value: 3,
    suffix: "+",
    label: "Data sources unified into executive Power BI dashboards",
  },
];

/**
 * The flagship case study — given its own dedicated, visually prominent section.
 * Public summary of the Product Recommendation RAG system (internal codename
 * "Super-Seller"); no confidential detail.
 */
export type ArchStage = { tech: string; role: string };
export type FlagshipStat = { value: string; label: string };

export const flagship = {
  name: "Product Recommendation RAG System",
  badges: ["Production AI", "Executive-approved", "Built solo 0 → 1"],
  problem:
    "Sales reps matched customers to products through a slow, manual catalog lookup — searching a large specialty-chemical catalog by hand on every quote. It was time-consuming, hard to scale, and easy to get wrong.",
  solution:
    "I initiated, designed, and built a full-stack Retrieval-Augmented Generation (RAG) application that returns relevant product recommendations in under 7 seconds. It pairs semantic vector search over the product catalog with an LLM to deliver fast, guided suggestions — turning a manual lookup into an instant experience.",
  recognition:
    "Demoed live to the CEO and CFO, the system earned approval for production deployment and was formally recognized in the company's Q1 2026 IT review for its initiative and completion.",
  architecture: [
    { tech: "React", role: "Frontend UI" },
    { tech: "Python", role: "Backend / API" },
    { tech: "Pinecone", role: "Vector retrieval" },
    { tech: "Gemini API", role: "LLM generation" },
  ] as ArchStage[],
  stack: ["React", "Python", "Pinecone", "Gemini API", "RAG", "Vector Search"],
  stats: [
    { value: "< 7s", label: "Time to a recommendation, vs. manual lookup" },
    { value: "5+ hrs/wk", label: "Projected time saved per sales rep" },
    { value: "CEO + CFO", label: "Live demo → approved for production" },
    { value: "0 → 1", label: "Initiated, designed & built end-to-end" },
  ] as FlagshipStat[],
  note: "Public case-study summary. No proprietary data, customer information, source code, or internal architecture is shown.",
};

export type ProjectCategory = "Professional Case Study" | "Public Project";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** One-line hook shown under the title. */
  tagline: string;
  /** Short impact statement; rendered in the accent color. */
  impact: string;
  stack: string[];
  /** Optional external link (public projects). Confidential work omits this. */
  href?: string;
  /** Label for the link, when present. */
  cta?: string;
  /** Employer-owned work: shows a lock and a "summary only" footer, no link. */
  confidential?: boolean;
};

const githubProfile = "https://github.com/cckenne2";

export const projects: Project[] = [
  {
    slug: "product-enrichment-pipeline",
    name: "LLM Product Enrichment Pipeline",
    category: "Professional Case Study",
    tagline:
      "An OpenAI-powered system that generates structured attributes for 42,000+ product records.",
    impact:
      "Replaced 12+ months of projected manual research with a 3-week run; cut the data-entry backlog by over 95%.",
    stack: ["Python", "OpenAI API", "NLP", "Data Validation", "ETL"],
    confidential: true,
  },
  {
    slug: "dbscan-deduplication",
    name: "DBSCAN Deduplication Pipeline",
    category: "Professional Case Study",
    tagline:
      "A production ML pipeline that resolves duplicate customer records across CRM and ERP systems.",
    impact:
      "Deduplicated 20,000+ records at 90% accuracy, eliminating months of manual reconciliation.",
    stack: ["Python", "scikit-learn", "DBSCAN", "Clustering", "Pandas"],
    confidential: true,
  },
  {
    slug: "netsuite-data-engineering",
    name: "NetSuite Data Engineering & ERP Migration",
    category: "Professional Case Study",
    tagline:
      "ETL, data-warehouse, and mapping work powering a mission-critical 2-year ERP-to-NetSuite migration.",
    impact:
      "Built SQL ETL with regex + multi-currency logic and an auto-updating mapping ETL feeding executive Power BI dashboards.",
    stack: ["SQL", "ETL", "NetSuite", "Data Warehouse", "Power BI", "Visual Studio"],
    confidential: true,
  },
  {
    slug: "promptstudio",
    name: "PromptStudio",
    category: "Public Project",
    tagline:
      "A full-stack prompt-engineering platform to create, test, and version LLM prompts with real-time evaluation.",
    impact: "Automated quality scoring across prompt structure, clarity, and length.",
    stack: ["React", "FastAPI", "Gemini API", "LLM Evaluation"],
    href: githubProfile,
    cta: "View on GitHub",
  },
  {
    slug: "pixelforge",
    name: "PixelForge",
    category: "Public Project",
    tagline:
      "A PyTorch image super-resolution model (CNN) that upscales low-resolution images.",
    impact: "Custom loss functions and training pipelines aimed at practical computer-vision use.",
    stack: ["Python", "PyTorch", "CNN", "Computer Vision"],
    href: githubProfile,
    cta: "View on GitHub",
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  /** Short track label, e.g. "Applied AI · Data Eng". */
  track: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "NetSuite Data Engineer · AI/ML Engineer",
    org: "Krayden, Inc. · Denver, CO",
    track: "Applied AI · Data Eng",
    period: "Jul 2025 – Present",
    summary:
      "Full-time contract engineer at a B2B specialty-chemical distributor, owning AI and data systems across a mission-critical 2-year ERP-to-NetSuite migration.",
    highlights: [
      "Executive-approved RAG application",
      "LLM enrichment of 42,000+ records",
      "DBSCAN dedup of 20,000+ records",
      "SQL ETL → executive Power BI",
    ],
  },
  {
    role: "Independent AI Development",
    org: "Self-directed projects",
    track: "AI / ML",
    period: "2024 – Present",
    summary:
      "Building AI tools end-to-end — a deep-learning image super-resolution model and a full-stack LLM prompt-evaluation platform.",
    highlights: [
      "PromptStudio — LLM prompt evaluation",
      "PixelForge — PyTorch super-resolution",
    ],
  },
  {
    role: "B.S., Data Science",
    org: "Arizona State University",
    track: "Education",
    period: "Dec 2024",
    summary:
      "Data Science with an emphasis in Business Analysis / IT / Networking. Capstone: civil-unrest predictive modeling on large economic datasets.",
    highlights: [
      "Random Forest · 73% accuracy · 0.83 AUC",
      "200,000+ records analyzed",
      "Led a team of 4",
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / Machine Learning",
    items: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "OpenAI API",
      "Gemini API",
      "Pinecone",
      "Embeddings",
      "DBSCAN / Clustering",
      "PyTorch",
      "scikit-learn",
      "NLP",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL / ELT",
      "NetSuite",
      "ERP Migration",
      "SQL",
      "Data Warehousing",
      "Power BI",
      "Data Mapping",
      "Regex Parsing",
      "Pandas",
    ],
  },
  {
    title: "Software Engineering",
    items: ["Python", "React", "FastAPI", "REST APIs", "Microservices", "Visual Studio", "Git"],
  },
  {
    title: "Foundations",
    items: [
      "Distributed Systems",
      "System Performance",
      "Responsible AI",
      "Executive Communication",
      "Cross-functional Collaboration",
    ],
  },
];
