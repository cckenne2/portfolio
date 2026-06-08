import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <PagePlaceholder
      eyebrow="404"
      title="This page drifted off the graph"
      description="The page you're looking for doesn't exist or has moved. Let's get you back on track."
    />
  );
}
