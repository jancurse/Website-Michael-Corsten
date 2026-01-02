/**
 * Helper to add base path to URLs using Astro's built-in BASE_URL
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
}
