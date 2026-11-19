# Repo rules

- bun is the package manager (`bun install`, `bun run dev`, `bun run build`).
- Astro static output, hosted on GitHub Pages at agency-of-one.dev.
- All copy lives in `src/data/site.ts`.
- Design contract: `.impeccable/surfaces/`. Product truth: `PRODUCT.md`.
- Colours only via the tokens in `src/styles/global.css`. Light and dark must both work.
- The stack's five plates are drawn in `src/components/Stack.astro`; the scroll-driven camera is `src/scripts/flight.ts` (tests beside it, `bun test`). `?at=3` pins a stop.
- Without the script or with reduced motion the page must stay a readable stacked document.
- Adding or removing a layer: edit `layers` in `src/data/site.ts`, add its plate in `src/components/plates/` and `Stack.astro`, and set `LAYERS` in `src/scripts/flight.ts` (a test checks they match).
- Plate animations animate `--o` and `--tf`, never `opacity` or `transform` directly (that blurs them in the 3D scene). Status colours (`.ok .warn .err .ai .info`) carry meaning only; see `src/styles/plates.css`.
