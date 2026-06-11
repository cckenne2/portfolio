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
  boldPortions?: string[];
};

export const metrics: Metric[] = [
  {
    value: 10,
    suffix: "+ min",
    label: "Spent performing manual catalog lookups per inquiry",
  },
  {
    value: 7,
    prefix: "<",
    suffix: "s",
    label: "Per request with the Product Intelligence Engine, which includes product context and comparisons",
    boldPortions: ["Product Intelligence Engine"],
  },
  {
    value: 42000,
    suffix: "+",
    label: "Product records enriched by an LLM pipeline in 3 days, and built in 3 weeks",
  },
  {
    value: 20000,
    suffix: "+",
    label: "Customer records deduplicated with 90% accuracy",
  },
];

export type ArchKind =
  | "user"
  | "frontend"
  | "api"
  | "search"
  | "vector"
  | "llm"
  | "output";
export type ArchStage = { kind: ArchKind; tech: string; role: string; detail: string };
export type FlagshipStat = { value: string; label: string };
export type TitledItem = { title: string; body: string };
export type ChallengeItem = TitledItem & { icon: "grounding" | "retrieval" | "latency" | "prompt" | "ranking" | "production" };

/**
 * The flagship case study — the "Product Intelligence Engine".
 *
 * This system was independently designed and built by Caleb; the code is his.
 * It solved a real business problem and was demonstrated live to executive
 * leadership (CEO & CFO) and approved for production. Business-specific details,
 * datasets, and internal processes are intentionally kept confidential.
 */
export const flagship = {
  slug: "product-intelligence-engine",
  name: "Product Intelligence Engine",
  tagline: "AI-powered product discovery built on enterprise data.",
  summary:
    "An intelligent product recommendation system built in React and powered by AI. Designed to help users find the right products for customers in seconds using enterprise product data. Demonstrated live to executive leadership who backed the project for production.",
  badges: ["Full-stack RAG", "Production-ready", "Independently built"],
  problem:
    "Finding the right products for customers often requires manually searching large product catalogs or relying on AI tools that lack access to company-specific product data. It's a slow and repetetive process that doesn't scale well and is difficult to automate. The effort adds up on every request, taking away time from actually helping customers.",
  solution:
    "I designed and built a retrieval-augmented recommendation engine in React that returns relevant product recommendations in less than seven seconds. It searches internal product catalogs semantically and transforms a manual lookup process into one that is instant and reliable.",
  recognition:
    "A project I designed and built independently, from the vector search to the frontend. In a live demo, leadership saw enough to back it for production. The CEO and CFO were impressed by the relevance of the recommendations, the speed of the responses, and the potential to transform how sales teams work with customers.",
  // High-level pipeline shown on the dedicated case-study page.
  architecture: [
    { kind: "user", tech: "User", role: "Sales rep", detail: "Enters a customer's requirements or use-case in plain language." },
    { kind: "frontend", tech: "React Frontend", role: "Client UI", detail: "Captures the request and renders ranked product recommendation cards." },
    { kind: "api", tech: "Python API", role: "Orchestration", detail: "Coordinates the embedding & retrieval workflow." },
    { kind: "search", tech: "Embedding Generation", role: "Query embedding", detail: "Encodes the user's request into a vector to prepare for semantic search." },
    { kind: "vector", tech: "Pinecone", role: "Vector retrieval", detail: "Returns the most semantically similar product candidates from the catalog." },
    { kind: "llm", tech: "Gemini", role: "Context-based generation", detail: "Reasons over the retrieved products to identify the closest matches." },
    { kind: "output", tech: "Smart Recommendations", role: "Response", detail: "Delivers the top results with explanations and confidence scores." },
  ] as ArchStage[],
  // Condensed four-node view used by the homepage teaser.
  coreTech: [
    { tech: "React", role: "Frontend UI" },
    { tech: "Python", role: "Backend / API / Embeddings" },
    { tech: "Pinecone", role: "Vector retrieval" },
    { tech: "Gemini", role: "LLM generation" },
  ],
  stack: ["React", "Python", "Pinecone", "Gemini", "RAG", "Prompt Engineering", "Semantic Search", "Grounding", "Latency Optimization"],
  stackGroups: [
    { title: "User Interface", items: ["React", "Responsive UI", "Recommendation Cards", "Guided Input Forms", "Freeform Text Prompts"] },
    { title: "Orchestration Layer", items: ["Python", "FastAPI", "REST API", "Request Orchestration"] },
    {
      title: "AI & Retrieval",
      items: ["Gemini API", "Pinecone", "Semantic Search", "RAG", "Embedding Generation"],
    },
    {
      title: "Engineering Practices",
      items: ["Prompt Engineering & Design", "Grounded Generation", "Relevance Ranking", "Latency Optimization"],
    },
  ] as SkillGroup[],
  challenges: [
    {
      icon: "grounding",
      title: "Evidence-based generation",
      body: "Recommendations had to come from an actual catalog, not the model's imagination. Forcing the model to only use products retrieved from the catalog with strict constraints kept the output accurate and trustworthy, minimizing hallucinations.",
    },
    {
      icon: "retrieval",
      title: "Semantic retrieval quality",
      body: "Customers rarely describe products using the exact same language found in a catalog or database. Embeddings allows the system match on overall meaning, helping surface relevant products even when terminology differs.",
    },
    {
      icon: "latency",
      title: "Minimizing latency",
      body: "Balancing retrieval quality against generation time proved to be a major challenge. Improving response times required optimizing every stage of the pipeline, from embedding generation to retrieval, prompt design, and caching techniques.",
    },
    {
      icon: "prompt",
      title: "Prompt design",
      body: "Carefully designed system prompts force the model to compare products using the same evaluation criteria each time, keeping outputs consistent with reduced variability between requests.",
    },
    {
      icon: "ranking",
      title: "Relevance ranking",
      body: "Returning relevant products isn't enough. The most useful ones have to come in order, and include confidence scores to increase trust.",
    },
    {
      icon: "production",
      title: "Built for production",
      body: "Users won't always search with perfect terminology, so the system was built to handle ambiguous requests while remaining simple enough for non-technical people to use with minimal training.",
    },
  ] as ChallengeItem[],
  stats: [
    { value: "< 7s", label: "Recommendation workflow, from prompt to results" },
    { value: "CEO + CFO", label: "Live executive demonstration" },
    { value: "Backed", label: "Endorsed for production after the demo" },
    { value: "42,000+", label: "Products the system was designed to search" },
  ] as FlagshipStat[],
  results: [
    "Replaced a slow, manual product-lookup process with an instant, guided experience.",
    "Returns ranked recommendations in under seven seconds, end to end.",
    "Demonstrated live to executive leadership — the CEO and CFO.",
    "Approved for production deployment following the demonstration.",
    "Significantly reduced manual product-lookup effort.",
    "Full-stack ownership: designed and built across React, Python, Pinecone, and Gemini.",
  ],
  lessons: [
    {
      title: "Retrieval is the product",
      body: "Most of the quality came from improving what got retrieved — not from reaching for a bigger model.",
    },
    {
      title: "Grounding earns trust",
      body: "Constraining the model to real catalog data is what made the output dependable enough to show executives.",
    },
    {
      title: "Latency is a feature",
      body: "Sub-seven-second responses were what made the tool feel usable in the middle of a real conversation.",
    },
    {
      title: "Design for the person using it",
      body: "Fitting a real user's workflow mattered more than technical novelty — and it's what drove the approval.",
    },
  ] as TitledItem[],
  roadmap: [
    {
      title: "Feedback loop",
      body: "Capture accept/reject signals to continuously sharpen relevance ranking.",
    },
    {
      title: "Evaluation harness",
      body: "Automated relevance and grounding checks to catch quality regressions before they ship.",
    },
    {
      title: "Caching & cost controls",
      body: "Cache frequent queries and embeddings to trim both latency and API spend.",
    },
    {
      title: "Sandboxed demo",
      body: "A password-protected environment on synthetic data so the system can be explored safely.",
    },
  ] as TitledItem[],
  demo: {
    status: "In development",
    headline: "Private by design",
    body: "The Product Intelligence Engine runs on confidential business data, so it isn't publicly hosted. A guided walkthrough — or a sandboxed demo on synthetic data — is available on request.",
    cta: "Request demo access",
  },
  note: "Independently designed and built by Caleb Kennedy. Business-specific details and datasets are kept entirely confidential.",
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
      "Product Intelligence Engine (RAG)",
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
