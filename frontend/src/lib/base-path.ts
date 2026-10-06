// Prefixes root-relative public asset paths with the GitHub Pages basePath
// (NEXT_PUBLIC_BASE_PATH). Empty string when the site is hosted at the root.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return path.startsWith("/") && !path.startsWith("//") ? BASE + path : path;
}
