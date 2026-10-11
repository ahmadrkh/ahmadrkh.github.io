# ahmadrkh.github.io

Personal academic website and CV of **Ahmadreza Khanari**, built with Next.js (App Router), TypeScript and Tailwind CSS and published as a static site on GitHub Pages.

## Structure

| Path | Purpose |
| --- | --- |
| `src/content/profile.ts` | **All content** — bio, education, research, teaching, experience, skills. Edit this one file to update both the homepage and the CV. |
| `src/app/page.tsx` | Homepage |
| `src/app/cv/page.tsx` | Printable CV (`/cv/`), use **Save as PDF** to export an A4 PDF |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `main` |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**. Every push to `main` then rebuilds and publishes the site.
