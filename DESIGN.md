---
name: Agency of One
description: One product taken apart as you scroll, six running layers drawn as dark technical cards.
colors:
  paper-bg: "#fcfcfc"
  paper-fg: "#171717"
  paper-muted: "#6b6b6b"
  paper-faint: "#a3a3a3"
  paper-rule: "#e2e2e2"
  paper-accent: "#0055ff"
  paper-accent-text: "#0047d6"
  paper-on-accent: "#ffffff"
  deep-ground: "#06070c"
  deep-bg: "#0a0c16"
  deep-fg: "#eef0f7"
  deep-muted: "#a3a9bb"
  deep-faint: "#5a6178"
  deep-rule: "#262b3d"
  glow-blue: "#3f5bff"
  glow-cyan: "#00b7ff"
  card-bg: "#1a2033"
  card-fg: "#e8ebf5"
  card-stroke: "#d3d8e8"
  card-muted: "#9aa1b5"
  card-faint: "#4d556b"
  card-edge: "#5e6a92"
  card-edge-top: "#97a3cc"
  card-sheen: "#2b3350"
  card-shade: "#121625"
  panel-top: "#2b3352"
  panel-edge-top: "#a3aed1"
  panel-edge-bottom: "#4f5878"
  slab: "#05060a"
  slab-edge: "#1c2133"
  accent: "#6f8cff"
  accent-text: "#9db1ff"
  on-accent: "#0b0d14"
  status-ok: "#5fe0a4"
  status-warn: "#ffbe55"
  status-err: "#ff7a7a"
  status-ai: "#b79bff"
  status-info: "#5fd4ff"
  system-dark-bg: "#111110"
  system-dark-fg: "#ededeb"
  system-dark-muted: "#9a9a96"
  system-dark-faint: "#6a6a66"
  system-dark-rule: "#2a2a28"
  system-dark-accent: "#4d8dff"
  system-dark-accent-text: "#7aa7ff"
typography:
  display:
    fontFamily: "'Host Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Host Grotesk Variable', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Host Grotesk Variable', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "'Host Grotesk Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Host Grotesk Variable', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  plate-tag:
    fontFamily: "'Host Grotesk Variable', system-ui, sans-serif"
    fontSize: "2.3px"
    fontWeight: 400
    letterSpacing: "0.02em"
    fontFeature: "tnum"
rounded:
  focus: "2px"
  slab: "8px"
  card: "16px"
  full: "50%"
spacing:
  gutter: "24px"
  gutter-wide: "max(6vw, 56px)"
  point-gap: "0.7rem"
  link-gap: "1.75rem"
  block: "2.25rem"
  panel-y: "3rem"
components:
  card:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.card-fg}"
    rounded: "{rounded.card}"
  card-panel:
    backgroundColor: "{colors.panel-top}"
    textColor: "{colors.card-muted}"
    typography: "{typography.plate-tag}"
  marker:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
  point-number:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    size: "1.5rem"
  link:
    textColor: "{colors.paper-fg}"
    typography: "{typography.title}"
  link-primary:
    textColor: "{colors.paper-accent-text}"
    typography: "{typography.title}"
  link-hover:
    textColor: "{colors.paper-accent-text}"
  rail-item:
    textColor: "{colors.deep-muted}"
    typography: "{typography.label}"
  rail-item-current:
    textColor: "{colors.deep-fg}"
  text-panel-phone:
    backgroundColor: "{colors.deep-bg}"
    textColor: "{colors.deep-fg}"
    padding: "22px 24px 7svh"
---

# Design System: Agency of One

## Overview

**Creative North Star: "The Exploded Drawing"** (working name, not yet confirmed by the owner)

The site is one figure: a product pulled apart into six layers (Interface, Auth, Server, Models, Cloud, Insights) and flown through by a scroll-driven camera. It opens on white paper with a large two-tone headline and the whole stack in isometric view. Scrolling moves the camera inside the stack, and the ground darkens to a deep blue-black with two soft glows and a dot grid. Every layer is the same dark card, drawn in thin lines, running its own looped process.

Text is minimal: a headline, then per layer a title, one sentence and three numbered points keyed to markers on the card. The technical edge comes from the drawings and their small labels, not from decoration. Colour beyond blue appears only as status.

**Key Characteristics:**
- Two grounds: white paper for the opening, a deep ground for everything inside the stack.
- One card style for all six plates, on either ground.
- Blue is a request in motion or the active control. Green, amber, coral, violet and cyan are status only.
- One typeface, Host Grotesk Variable, self-hosted.
- Scroll is the only navigation device; without script or with reduced motion the page is a plain stacked document.

## Colors

A neutral paper palette with one blue, a blue-black deep palette with a lighter blue, and five status colours that live only on the cards. Tokens are scoped by `data-tone` and exposed under the same custom property names (`--bg`, `--fg`, `--muted`, `--faint`, `--rule`, `--accent`, `--accent-text`, `--on-accent`), so components never name a tone.

### Primary
- **Signal Blue** (`paper-accent`, `paper-accent-text`): on paper, the link underline, the first contact link, the scroll cue line, focus ring, selection.
- **Request Blue** (`accent`, `accent-text`, `on-accent`): on the deep ground and on cards, a request in motion (packets, riser dots), the active control, markers and numbered points, the current rail item.

### Secondary
- **Status set** (`status-ok`, `status-warn`, `status-err`, `status-ai`, `status-info`): defined only under `data-tone='card'`. ok = succeeded or healthy, warn = waiting, limited or slow, err = rejected or failed, ai = the model at work, info = data being stored, read or copied.

### Neutral
- **Paper** (`paper-bg`, `paper-fg`, `paper-muted`, `paper-faint`, `paper-rule`): the opening screen. The second line of the headline and all body copy use `paper-muted`.
- **Deep** (`deep-ground`, `deep-bg`, `deep-fg`, `deep-muted`, `deep-faint`, `deep-rule`): stage text and lines once the camera is inside the stack. `deep-ground` is the full-depth ground and the browser theme colour; `deep-bg` is the solid text panel on phones.
- **Glows** (`glow-blue`, `glow-cyan`): two radial glows on the deep ground, blue at top right (up to 46% mix), cyan at bottom left (up to 20% mix). Never used as flat fills.
- **Card** (`card-bg`, `card-fg`, `card-stroke`, `card-muted`, `card-faint`, `card-edge`, `card-edge-top`, `card-sheen`, `card-shade`, `panel-top`, `panel-edge-top`, `panel-edge-bottom`, `slab`, `slab-edge`): the plate surface, its lines, labels, raised panels and thickness.
- **System dark** (`system-dark-*`): the `:root` values under `prefers-color-scheme: dark`. They apply only where no tone is set: the legal pages and the stacked fallback of the home page.

### Named Rules
**The Three Tones Rule.** Colour is chosen by setting `data-tone` to `paper`, `deep` or `card` on a container, never by writing a hex in a component. The plates always carry `card`; the stage carries `paper` or `deep`, set by the camera.

**The Paper Opening Rule.** While the flight runs, the opening is white paper in every system mode. `paper` and `deep` pin `color-scheme` so form controls and scrollbars follow the ground, not the visitor's setting.

**The Depth Rule.** The ground is one continuous value `--d` from 0 (paper) to 1 (deepest), written by the camera. The base colour is `color-mix(in oklab, paper-bg, deep-ground d)`, and the dot grid (white at up to 9%, 30px pitch) and both glows scale with the same `--d`. The tone flips from `paper` to `deep` when `--d` passes 0.45, and the browser theme colour follows.

**The Meaning Only Rule.** A status colour is used only where the drawing states that thing: a check that passed, a counter filling, a 403, a model working, a row being read. Blue stays the request and the active control. No status colour is ever a layer's identity or an ornament.

## Typography

**Display Font:** Host Grotesk Variable (with system-ui, sans-serif)
**Body Font:** Host Grotesk Variable (with system-ui, sans-serif)

**Character:** One grotesk in a narrow weight range, set tight and large for display and plain for everything else. It is self-hosted through `@fontsource-variable/host-grotesk`; no font is loaded from a third party.

### Hierarchy
- **Display** (500, clamp(2.75rem, 6vw, 5.25rem), 1, -0.035em): the hero headline. Two tones: first sentence in foreground, second on its own line in muted.
- **Headline** (500, clamp(1.75rem, 2.6vw, 2.5rem), 1.08, -0.025em): one per layer and the closing panel. Balanced wrapping.
- **Title** (500, 1.25rem; closing links clamp(1.25rem, 1.8vw, 1.5rem)): contact links. The numbered points use 500 at body size.
- **Body** (400, 1.0625rem, 1.6): one sentence per layer in muted, held to 30ch (38ch in the closing panel).
- **Label** (400, 0.8125rem): rail items and footer. The scroll cue is 0.875rem.
- **Plate tag** (2.3px in a 100-unit drawing, 0.02em, tabular numerals): route names, status codes, timings on a card. Lower case, short. Marker numerals are 3.1px at 600.
- **Mark** (700, 1.5rem): the "A/1" placeholder mark, text only.

### Named Rules
**The One Face Rule.** Hierarchy comes from size, weight 500 against 400, and foreground against muted. No second typeface, no uppercase tracking, no italics.

## Layout

The home page is a sticky stage one screen tall inside a scroll track of eight screens (hero, six layers, end). Invisible snap anchors sit at each screen with `scroll-snap-type: y proximity`; they also carry the layer ids the rail links to.

- **Desktop (900px and up):** text panel on the left at `max(6vw, 56px)`, vertically centred, `min(27rem, 32vw)` wide (hero `min(46rem, 50vw)`, end `min(30rem, 38vw)`). The stack sits right of centre (`--ox: 17vw`), plate size `min(60svh, 40vw)`. A rail of layer names is pinned 36px from the right edge. The footer appears only on the closing panel.
- **Phone (below 900px):** the stack sits above (`--oy: -19svh`, plate size `min(78vw, 46svh)`), the text panel is docked to the bottom as a solid surface with a top hairline so plates never run through the text. No rail. Overview gaps are pulled in by 20% so all plates clear the panel.
- **Rhythm:** 24px side gutter. Inside a panel: 0.9rem title to sentence, 1.75rem to the points, 0.7rem between points, 2.25rem to the links.
- **Legal pages:** a single 600px column, 72px top and bottom, 24px gaps, following the system light or dark mode.

### Motion grammar
- **Camera** (`src/scripts/flight.ts`): scroll position maps to a pose (tilt, scale, gap between plates, focus index, depth). Overviews sit at 57deg / 45deg isometric; a focused layer faces the visitor at 24deg / -8deg, scale 1, plates 700px apart. The camera rests for the first and last 18% of each screen and glides with a smoothstep in between.
- **Plates:** inside the stack, plates the camera has passed fade out and plates below dim with depth (never below 0.15). Slabs and cast shadows follow their plate's opacity.
- **Ambient:** overviews sway 4deg on a slow sine; pointer position tilts the camera by up to 4deg and 6deg. Four dots travel the riser, alternate ones down and up, on a 6.4s cycle.
- **Text:** a panel is shown only near its stop, fading and rising 14px (0.35s opacity, 0.6s transform) on `cubic-bezier(0.16, 1, 0.3, 1)`, the one easing of the system.
- **Liveness:** plate animations run only on `.is-live` plates (the focused one, and all of them in both overviews). Markers show only on the `.is-focus` plate, staggered 140ms each.
- **Fallback:** with `prefers-reduced-motion: reduce` or without script, `.js-flight` is never set. The page is a plain stacked document: the static isometric stack in a 62svh block, then every panel in order, then the footer. No tone is set, so it follows the system light or dark tokens, and plate animations stay paused.

## Elevation & Depth

Depth is real 3D, not a shadow scale. The stack is a `preserve-3d` scene; each plate sits at its own `translateZ`. There is no drop shadow on any text or control, and nothing on the paper or deep ground is elevated.

### Depth recipe for the card
- **Lit surface:** a 155deg gradient from `card-sheen` through `card-bg` to `card-shade`, with a faint accent glow (17% of the accent) at the top left.
- **Edge:** 2px `card-edge` border with a brighter top (`card-edge-top`), plus one inset top highlight (`inset 0 3px 0 rgb(255 255 255 / 0.07)`).
- **Raised panels:** every plain rectangle in a drawing is filled with a vertical gradient (`panel-top` to `card-bg`) and stroked with a gradient edge (`panel-edge-top` to `panel-edge-bottom`).
- **Slab:** three darker copies (`slab` with a 1px `slab-edge` border), 5px apart beneath each plate, read as its thickness.
- **Cast shadow:** a soft radial shadow (black at 60%) offset 5% and 7%, laid just above each plate from the one over it.

### Named Rules
**The Tied Shadow Rule.** A cast shadow belongs to the plate that casts it, and fades with it. A plate the camera has passed must not darken the one in focus.

**The Double Size Rule.** Plates are painted at 200% and scaled to 50% so lines and labels stay sharp when the camera tilts and zooms. Keep this when changing plate size.

## Shapes

Soft rectangles and thin lines. Cards have 16px corners (at double size, so 8px as seen) and slabs 8px. Panels inside a drawing use small radii of 0.4 to 1.5 units in the 100-unit drawing. The only full circles are markers, numbered points and riser dots. Lines are hairlines: 0.3 units for drawing strokes with round caps and joins, 1.5px for link underlines and the scroll cue, 2px for the riser and the current rail tick. The focus ring is 2px accent, offset 3px.

## Components

### Card (plate)
The signature component. One per layer, always `data-tone='card'`, a 100 by 100 plan-view SVG.
- **Surface and depth:** see Elevation & Depth. Never restyled per layer.
- **Drawing vocabulary** (`src/styles/plates.css`): default stroke is a thin light line; `.fill` solid foreground; `.soft` faint fill for placeholder content; `.solid` background fill; `.dash` muted dashed line; `.hair` extra-thin faint line; `.node` heavy 1.1 stroke for gates and bars; `.lit` and `.lit-fill` accent; `.ok .warn .err .ai .info` status strokes, each with a `-fill` variant; `.tag` a small label, coloured by a status class when it states one; `.packet` an accent dot travelling along an `offset-path`.
- **Processes:** each plate runs one looped story (most on an 8s cycle, some 6s or 7s) with linear keyframes and per-element start times in `--t`. The loop must end in its starting state.
- **Animation rule:** plate keyframes animate the registered properties `--o` (opacity) and `--tf` (transform), never `opacity` or `transform`. Animating those directly makes the browser rasterise each piece at low resolution inside the 3D scene, which shows as blur. An element placed with a `transform` attribute keeps it; animate a child instead.

### Marker and numbered point
A marker is an accent disc with a numeral on the card (r 2.7 units, background-coloured ring); the matching list item in the text panel carries the same numeral in a 1.5rem accent disc. Three per layer, numbered 1 to 3, same order in both places.

### Riser
One thin vertical line joins each plate to the next on the outer right edge, in the stage foreground at 32% opacity, built from two ribbons at right angles so it never turns edge-on. Accent dots (10px) run its full height.

### Text panel
Title, one muted sentence, three numbered points. Transparent on desktop; solid `--bg` with a top `--rule` hairline on phones.

### Links
Text links only; there are no buttons. Inherit the text colour with a 1.5px accent underline offset 0.3em; hover shifts the text to `--accent-text`. The first link in a group is `--accent-text` at rest.

### Navigation rail (desktop only)
Layer names in label size, right-aligned, each followed by a 14px faint tick. Current or hovered item takes the foreground colour; the current tick grows to 34px, 2px, accent.

### Scroll cue
A 1.5px accent line, 2.25rem tall, that draws downward and fades on a 1.8s loop beside a short label. Shown only when the flight is active.

## Do's and Don'ts

### Do:
- **Do** set colour through `data-tone` and the shared custom properties; add a new colour as a token in `src/styles/global.css` first.
- **Do** keep every plate in the one card style, on any ground.
- **Do** use blue for a request in motion and the active control, and a status colour only where the drawing states that status.
- **Do** animate `--o` and `--tf` inside plates, and gate animations on `.is-live`.
- **Do** keep the page readable as a stacked document without script and with reduced motion.
- **Do** keep copy to a title, one sentence and three points per layer, with markers matching the points.
- **Do** check both the paper and deep ground, and the system light and dark fallback, when touching stage text or lines.

### Don't:
- **Don't** animate `opacity` or `transform` on anything inside a plate drawing.
- **Don't** give a layer its own colour or card style. One colour per layer was tried and rejected as too much.
- **Don't** use status colours as decoration, or blue as a status.
- **Don't** let the opening follow the system dark mode while the flight runs.
- **Don't** add a second typeface or load fonts from a third party.
- **Don't** add drop shadows to text, links or panels; depth belongs to the stack.
- **Don't** let a cast shadow outlive the plate that casts it.
