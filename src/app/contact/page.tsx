import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Caleb Kennedy about AI/ML and data engineering work.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact"
      title="Let's talk"
      description="A dedicated contact form is in the works. For now, the fastest way to reach me is via the links on the homepage's contact section."
    />
  );
}
