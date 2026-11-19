# Repo rules

- bun is the package manager (`bun install`, `bun run dev`, `bun run build`).
- Astro static output, hosted on GitHub Pages at agency-of-one.dev.
- All copy lives in `src/data/site.ts`.
- Design contract: `.impeccable/surfaces/`. Product truth: `PRODUCT.md`.
- Colours only via the tokens in `src/styles/global.css`. Light and dark must both work.
- The stack's five plates are drawn in `src/components/Stack.astro`; the scroll-driven camera is `src/scripts/flight.ts` (tests beside it, `bun test`). `?at=3` pins a stop.
- Without the script or with reduced motion the page must stay a readable stacked document.
