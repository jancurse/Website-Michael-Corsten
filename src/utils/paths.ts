/**
 * Helper to add base path to URLs using Astro's built-in BASE_URL
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Ensure exactly one slash between base and path
  const baseClean = base.replace(/\/+$/, '');
  const pathClean = path.replace(/^\/+/, '');
  return `${baseClean}/${pathClean}`;
}
