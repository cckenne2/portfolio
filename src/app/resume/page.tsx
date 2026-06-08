import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Resume",
  description: "Caleb Kennedy's resume — AI/ML Engineer.",
};

export default function ResumePage() {
  return (
    <PagePlaceholder
      eyebrow="Resume"
      title="Resume coming soon"
      description="A downloadable resume will be available here shortly. In the meantime, reach out and I'll happily send a copy."
    />
  );
}
