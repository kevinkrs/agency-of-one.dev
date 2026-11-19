---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: home (src/pages/index.astro)

Mode: Persuade. Visitor: solo entrepreneur or CTO, then founder, deciding whether to contact Kevin.
Action: email kevin@agency-of-one.dev or connect on LinkedIn; kevinkrs.com as CV. Proof lives on kevinkrs.com.
Constraints: minimal with a technical edge (references the user named: rauno.me, teenage.engineering, railway.com). Illustrates a journey, does not pitch a product. Light and dark, following the system setting. English only.
Backup directions: .impeccable/backup/ (round-2 "sheet" is the named fallback).
Iteration 1 (user): accent changed from orange to blue; figure redrawn as an exploded isometric stack that assembles; stage headings rewritten as sentences.

Iteration 2 (user): less text, a hero that kicks in, and an immersive fly-through. The page is now one sticky full-screen stage: scroll flies a 3D camera from the assembled stack (hero) down through five plates (interface, sign-in, server, models, cloud), each showing three numbered points, and ends on the exploded overview with the contact links. The text column, ticks and isometric SVG figure below are superseded by this.

Iteration 3 (user): plates carry running processes (one file each in src/components/plates/), each layer has its own colour tone (yellow, orange, blue, violet, navy) that floods the stage while the camera is on it, the opening and closing screens stay neutral white, and the layers are joined by risers with dots travelling down and up.

## Direction contract

THESIS: A nearly empty page where a few sentences tell the journey and one small isometric line figure does the showing: it grows from a box into a running system as you read. Refuses the dark hero with a node diagram and a row of feature cards.
OWN-WORLD: Near-white ground (#fcfcfc), near-black in dark (#111110); ink text, grey secondary, hairline rules; one blue (#0055ff, lighter in dark) reserved for whatever is new or moving in the figure and for link underlines. Geist at small, tight sizes. Hairline 1.5px linework, 6px radii, no cards, no shadows, no gradients.
STORY: The visitor reads "Products are complex", scrolls through six short stages (sketch, screen, server, lock, place to run, model) while the figure gains a layer at each, sees the finished system running, and contacts Kevin.
FIRST VIEWPORT: Desktop: 520px text column left of centre with the A/1 mark, the headline at about 40px, one sentence and the three contact links; to its right a 360px sticky figure showing one outlined rectangle with a blinking blue cursor; six tick marks down the far left edge, the first one blue. Mobile: figure pinned at the top, text scrolls beneath it.
SIGNATURE INTERACTION: Scroll position selects the stage; each stage draws its layer into the figure in blue, then settles to ink, and from stage three on, request dots travel the connections continuously. Motion grammar: line draw-in and short translate with exponential ease-out; everything static under prefers-reduced-motion.
FORM: User-picked grounded direction "One Figure" from the safer round (third of three), pinned by the user over the roll. seed:5a7b46e5ef740ec6
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
