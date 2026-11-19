---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: home (src/pages/index.astro)

Mode: Persuade. Visitor: solo entrepreneur or CTO, then founder, deciding whether to contact Kevin.
Action: email kevin@agency-of-one.dev or connect on LinkedIn; kevinkrs.com as CV. Proof lives on kevinkrs.com.
Constraints: minimal with a technical edge (references the user named: rauno.me, teenage.engineering, railway.com, later codesphere.com for card depth and PostHog for events and tracing). Illustrates a journey, does not pitch a product. English only. Placeholder mark "A/1" accepted for now.
Other directions kept: branches `color-tones` (one colour per layer, rejected as too much) and `drawing-sheet` (grey sheet with title block); earlier sketches in .impeccable/backup/.

How it got here (user steering, in order): less text and a hero that kicks in; a fly-through of the layers with short explanations; cards with real processes running; one consistent card style on a ground that darkens with scroll, only the opening white; cards with depth; status colours beyond blue; a sixth layer for events and tracing; stronger contrast between layers; one discreet connection line on the outer side. Last word: "It's a start. I'd keep it like this for now."

## Direction contract

THESIS: One product taken apart as you scroll: a camera flies down through six running layers, each a dark technical card, and the page darkens the deeper you go. Refuses the hero with a static node diagram and a row of feature cards.
OWN-WORLD: White paper opening (#fcfcfc) in every system mode; from the first layer on a deep ground (#06070c) with two soft blue glows and a dot grid. All plates share one dark card style: lit slab (#1a2033) with a brighter top edge, raised gradient panels, hairline drawings, small technical labels. Blue (#6f8cff on cards, #0055ff on paper) is a request in motion or the active control; green, amber, coral, violet and cyan appear only as status. Host Grotesk Variable, self-hosted, weight 500 for display.
STORY: The visitor reads "Products are complex. Skip finding out yourself.", scrolls, and is flown through Interface, Sign-in, Server, Models, Cloud and Insights, each with a title, one sentence and three numbered points keyed to markers on the card; the camera pulls back to the whole stack and the visitor contacts Kevin.
FIRST VIEWPORT: Desktop: left, the A/1 mark, the two-tone headline at up to 5.25rem, three contact links and a scroll cue; right, the stack of six dark cards pulled apart in isometric view, all animating, joined by one thin riser on the outer edge; far right a small rail of layer names. Phone: the stack above, the text on a solid panel below.
SIGNATURE INTERACTION: Scroll drives a 3D camera (src/scripts/flight.ts): it rests at each stop and glides between them; the card in focus turns to face the visitor, the one above flies past and fades, the ground darkens with depth. Each card runs its own looped process (requests, a forward pass, a failover, a trace). Pointer position tilts the camera slightly. With reduced motion or no script the page is a plain stacked document.
FORM: Grounded direction "One Figure", third card of the safer round, pinned by the user over the roll ("I think I like 3 more. Let's take 3 and then we iterate on it"), then reshaped by the steering above. seed:5a7b46e5ef740ec6 (rolled in the sibling working folder ~/Projects/agency-of-one.dev, which is why this worktree has no record of it).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
