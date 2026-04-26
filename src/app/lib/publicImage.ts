/** Files in `public/images/`; respects Vite `base` (e.g. GitHub Pages). */
export function publicImage(name: string): string {
  return `${import.meta.env.BASE_URL}images/${name}`;
}
