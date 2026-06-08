/**
 * Central site configuration.
 *
 * NOTE: The contact email and social URLs below are placeholders.
 * Update them in this one file to propagate across the whole site.
 */
export const siteConfig = {
  name: "Caleb Kennedy",
  role: "AI/ML Engineer",
  title: "Caleb Kennedy — AI/ML Engineer",
  description:
    "AI/ML Engineer building practical AI systems, LLM applications, and production data pipelines — from RAG and model pipelines to ETL and data warehousing.",
  url: "https://calebkennedy.me", // TODO: replace with the production domain
  location: "United States",
  email: "caleb@calebkennedy.me", // TODO: replace with a real contact email
  links: {
    github: "https://github.com/calebkennedy", // TODO: replace with the real profile
    linkedin: "https://www.linkedin.com/in/calebkennedy", // TODO: replace with the real profile
    resume: "/resume", // placeholder route until a downloadable resume is added
  },
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
