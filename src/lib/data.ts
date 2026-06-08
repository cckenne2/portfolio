/**
 * Content for the homepage. Kept separate from presentation so copy and
 * numbers can be edited without touching component code.
 *
 * The metrics, project descriptions, and experience entries are written to be
 * accurate to the brief while avoiding any proprietary detail. Numbers tied to
 * real work (42K+ enriched, 20K+ deduplicated) are highlighted; the rest are
 * safe placeholders Caleb can refine.
 */

export type Metric = {
  value: number;
  /** Rendered after the animated number, e.g. "K+", "%", "+". */
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: 42, suffix: "K+", label: "Catalog records enriched by LLM pipelines" },
  { value: 20, suffix: "K+", label: "Duplicate records resolved with DBSCAN" },
  { value: 6, suffix: "", label: "Production AI & data systems shipped" },
  { value: 100, suffix: "%", label: "End-to-end ownership, data to deploy" },
];

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
  /** Where the card's primary action points. */
  href: string;
  /** Label for the primary action. */
  cta: string;
  /** Whether the source/details are confidential (employer-owned). */
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    slug: "super-seller-rag",
    name: "Super-Seller RAG Application",
    category: "Professional Case Study",
    tagline:
      "A retrieval-augmented assistant that turns scattered internal knowledge into instant, source-cited answers.",
    impact: "Cut answer-lookup from minutes to seconds with grounded responses.",
    stack: ["Python", "LLMs", "RAG", "Vector Search", "FastAPI"],
    href: "/projects",
    cta: "Read case study",
    confidential: true,
  },
  {
    slug: "product-enrichment-pipeline",
    name: "LLM Product Enrichment Pipeline",
    category: "Professional Case Study",
    tagline:
      "A production pipeline that generates structured, schema-validated attributes for 42K+ catalog records.",
    impact: "Enriched 42,000+ records, replacing slow manual tagging.",
    stack: ["Python", "LLMs", "Batch Inference", "Data Validation", "ETL"],
    href: "/projects",
    cta: "Read case study",
    confidential: true,
  },
  {
    slug: "dbscan-deduplication",
    name: "DBSCAN Deduplication Pipeline",
    category: "Professional Case Study",
    tagline:
      "Density-based clustering that resolves duplicate entities across 20K+ noisy records.",
    impact: "Collapsed 20,000+ records into clean, canonical entities.",
    stack: ["Python", "scikit-learn", "DBSCAN", "Embeddings", "Pandas"],
    href: "/projects",
    cta: "Read case study",
    confidential: true,
  },
  {
    slug: "netsuite-data-engineering",
    name: "NetSuite Data Engineering",
    category: "Professional Case Study",
    tagline:
      "ETL, data warehousing, and migration work that makes operational NetSuite data analytics-ready.",
    impact: "Built reliable pipelines and a warehouse layer powering analytics.",
    stack: ["SQL", "ETL", "Data Warehouse", "NetSuite", "Python"],
    href: "/projects",
    cta: "Read case study",
    confidential: true,
  },
  {
    slug: "promptstudio",
    name: "PromptStudio",
    category: "Public Project",
    tagline:
      "A workspace for designing, testing, and versioning LLM prompts with side-by-side comparisons.",
    impact: "Faster prompt iteration with reproducible experiments.",
    stack: ["Next.js", "TypeScript", "LLM APIs", "Tailwind CSS"],
    href: "#projects",
    cta: "View project",
  },
  {
    slug: "pixelforge",
    name: "PixelForge",
    category: "Public Project",
    tagline:
      "A browser-based creative tool for generating and manipulating images on the canvas.",
    impact: "Real-time, GPU-friendly rendering in the browser.",
    stack: ["TypeScript", "React", "Canvas", "WebGL"],
    href: "#projects",
    cta: "View project",
  },
];

export type ExperienceEntry = {
  role: string;
  /** Short track label, e.g. "AI / ML". */
  track: string;
  /** Stage or period label; placeholder until real dates are added. */
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "AI/ML Engineer",
    track: "Applied AI",
    period: "Current focus",
    summary:
      "Design and ship LLM applications and RAG systems, owning them from data and prompts through deployment.",
    highlights: [
      "Production RAG assistant with cited answers",
      "LLM enrichment across 42K+ records",
      "Prompt design & evaluation tooling",
    ],
  },
  {
    role: "Data Engineer",
    track: "Data Platform",
    period: "Recent work",
    summary:
      "Build ETL pipelines, warehouse models, and migrations that turn raw operational data into trustworthy analytics.",
    highlights: [
      "NetSuite ETL & data warehousing",
      "DBSCAN deduplication at scale",
      "Monitored, reliable pipelines",
    ],
  },
  {
    role: "Software Engineer",
    track: "Full-Stack",
    period: "Foundation",
    summary:
      "Full-stack development across modern web stacks and APIs, with an emphasis on shipping production software.",
    highlights: [
      "TypeScript & Next.js applications",
      "REST APIs and services",
      "From prototype to production",
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
      "Embeddings",
      "Vector Databases",
      "DBSCAN / Clustering",
      "scikit-learn",
      "Model Evaluation",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL / ELT",
      "Data Warehousing",
      "NetSuite",
      "SQL",
      "Pipeline Orchestration",
      "Data Validation",
      "Pandas",
    ],
  },
  {
    title: "Software & Backend",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "Frontend & Delivery",
    items: ["React", "Next.js", "Tailwind CSS", "Git", "CI/CD", "Vercel"],
  },
];
