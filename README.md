# agency-of-one.dev

Teaser site for Agency of One, the brand Kevin Kraus sells his freelance product engineering under. Built with [Astro](https://astro.build) (static output), deployed to GitHub Pages.

## Edit content
All copy is in `src/data/site.ts`.

## Develop
```bash
bun install
bun run dev
bun run build
```

## Deploy
Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.
One-time setup: repo Settings → Pages → Source: **GitHub Actions**, custom domain `agency-of-one.dev` (set by `public/CNAME`).
