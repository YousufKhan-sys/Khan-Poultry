const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }) {
  if (src.startsWith("/") && !src.startsWith("//")) {
    return base + src;
  }
  return src;
}
