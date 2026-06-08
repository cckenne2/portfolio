import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "More about Caleb Kennedy — an AI/ML Engineer focused on practical AI systems, LLM applications, and production data pipelines.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="More about me, coming soon"
      description="A fuller story — background, how I approach building AI and data systems, and what I care about as an engineer — will live here."
    />
  );
}
