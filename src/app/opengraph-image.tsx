import { renderOgImage, ogSize, ogAlt } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = ogAlt;

export default function OpengraphImage() {
  return renderOgImage();
}
