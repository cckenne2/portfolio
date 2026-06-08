import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Detailed case studies and project write-ups covering AI/ML systems, LLM applications, and data engineering work.",
};

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      eyebrow="Projects"
      title="Full case studies are on the way"
      description="Deep-dive write-ups for each AI, ML, and data engineering project — architecture, scale, and measurable impact — are being built out here. In the meantime, the homepage highlights the featured work."
    />
  );
}
