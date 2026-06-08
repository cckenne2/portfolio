/**
 * Central site configuration. All real contact details and links live here so
 * they propagate across the whole site from one place.
 */
export const siteConfig = {
  name: "Caleb Kennedy",
  role: "AI/ML Engineer",
  // Broadened positioning line used under the hero headline.
  pillars: ["AI Engineer", "Data Engineer", "Python Software Engineer"],
  title: "Caleb Kennedy — AI/ML Engineer",
  description:
    "AI/ML Engineer building production AI and data systems — an executive-approved RAG application, an LLM enrichment pipeline across 42,000+ records, and ERP-scale data engineering with Python, SQL, and modern AI frameworks.",
  url: "https://calebkennedy.me",
  location: "Denver, CO",
  email: "contact@calebkennedy.me",
  links: {
    github: "https://github.com/cckenne2",
    linkedin: "https://www.linkedin.com/in/calebkennedyAI/",
    // Served from /public — opens the real PDF résumé in a new tab.
    resume: "/caleb-kennedy-resume.pdf",
  },
} as const;

export const navLinks = [
  { label: "Projects", href: "#flagship" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
