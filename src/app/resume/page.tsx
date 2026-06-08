import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

// The résumé now lives as a static PDF in /public. Keep the /resume URL working
// by redirecting it to the file, so old links and direct visits resolve.
export default function ResumePage() {
  redirect(siteConfig.links.resume);
}
