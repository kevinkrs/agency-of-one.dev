// Scroll flies a camera down through the stack. Stop 0 is the hero, 1..5 are the layers, 6 the end.

export type Pose = { rx: number; rz: number; s: number; gap: number; fi: number; k: number; y: number; d: number };
// rx/rz: camera tilt in degrees. s: scale. gap: px between plates. fi: index of the plate the
// camera looks at. k: 1 when inside the stack (plates above the camera fade), 0 for overviews.
// y: px the whole view is shifted down (negative = up), to centre an overview that hangs low.
// d: how deep the ground has darkened, 0 (the opening's paper) to 1 (deepest).
const overview = (s: number, gap: number, fi: number, y: number, d: number): Pose => ({ rx: 57, rz: 45, s, gap, fi, k: 0, y, d });
const focus = (i: number): Pose => ({ rx: 24, rz: -8, s: 1, gap: 700, fi: i, k: 1, y: 0, d: 0.86 + i * 0.035 });
export const STOPS: Pose[] = [overview(0.5, 170, 0, -140, 0), focus(0), focus(1), focus(2), focus(3), focus(4), overview(0.46, 210, 2, 0, 1)];

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
// Rest at each stop for the first and last 18% of a screen, glide in between.
const glide = (t: number) => {
  const u = clamp((t - 0.18) / 0.64);
  return u * u * (3 - 2 * u);
};

export function pose(p: number): Pose {
  const max = STOPS.length - 1;
  const q = clamp(p, 0, max);
  const i = Math.min(max - 1, Math.floor(q));
  const t = glide(q - i);
  const a = STOPS[i], b = STOPS[i + 1];
  const mix = (key: keyof Pose) => a[key] * (1 - t) + b[key] * t; // exact at both ends
  return { rx: mix('rx'), rz: mix('rz'), s: mix('s'), gap: mix('gap'), fi: mix('fi'), k: mix('k'), y: mix('y'), d: mix('d') };
}

// Plates the camera has flown past vanish; plates further down dim with depth.
export function plateOpacity(j: number, c: Pose) {
  const z = ((c.fi - j) * c.gap) / 700;
  const inside = z > 0 ? clamp(1 - z * 1.8) : Math.max(0.15, 1 + z * 0.5);
  return 1 + (inside - 1) * c.k;
}

function init() {
  const root = document.querySelector<HTMLElement>('[data-flight]');
  const world = root?.querySelector<HTMLElement>('[data-world]');
  const stage = root?.querySelector<HTMLElement>('[data-stage]');
  // Without the script, or with reduced motion, the page stays a plain stacked document.
  if (!root || !world || !stage || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const plates = [...root.querySelectorAll<HTMLElement>('[data-plate]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];
  const navs = [...root.querySelectorAll<HTMLElement>('[data-nav]')];
  const dots = [...root.querySelectorAll<HTMLElement>('[data-dot]')];
  const followers = [...root.querySelectorAll<HTMLElement>('[data-of]')]; // slabs and cast shadows
  document.documentElement.classList.add('js-flight');

  // ?at=3 pins a stop, for working on one layer and for screenshots.
  const pinned = new URLSearchParams(location.search).get('at');
  let mx = 0, my = 0;
  addEventListener('pointermove', (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });

  const frame = (now: number) => {
    const p = pinned !== null ? Number(pinned) : clamp(-root.getBoundingClientRect().top / stage.offsetHeight, 0, STOPS.length - 1);
    const c = pose(p);
    const sway = pinned !== null ? 0 : (1 - c.k) * 4 * Math.sin(now / 1900);
    world.style.setProperty('--gap', c.gap.toFixed(1));
    world.style.transform = `translate3d(var(--ox), calc(var(--oy) + ${c.y.toFixed(1)}px), 0) scale(${c.s.toFixed(4)}) rotateX(${(c.rx - my * 4).toFixed(2)}deg) rotateZ(${(c.rz + sway + mx * 6).toFixed(2)}deg) translateZ(${(c.fi * c.gap).toFixed(1)}px)`;
    const at = Math.round(p);
    const near = Math.abs(p - at) < 0.3;
    const end = at === STOPS.length - 1;
    plates.forEach((el, j) => {
      el.style.opacity = plateOpacity(j, c).toFixed(3);
      el.classList.toggle('is-focus', near && j === at - 1);
      // Running: the plate the camera is on, and every plate in the two overviews.
      el.classList.toggle('is-live', end || at === 0 || j === at - 1);
    });
    followers.forEach((el) => (el.style.opacity = plateOpacity(Number(el.dataset.of), c).toFixed(3)));
    // The ground darkens with depth; once it is dark the stage switches to light text.
    stage.style.setProperty('--d', c.d.toFixed(3));
    stage.dataset.tone = c.d > 0.45 ? 'deep' : '';
    // Dots run the full height of the stack: odd ones up the right riser, even ones down the left.
    const depth = (plates.length - 1) * c.gap;
    dots.forEach((el, n) => {
      const u = (now / 5200 + n / dots.length) % 1;
      el.style.transform = `translateZ(${(-(n % 2 ? 1 - u : u) * depth).toFixed(1)}px)`;
    });
    panels.forEach((el, i) => el.classList.toggle('is-active', near && i === at));
    navs.forEach((el, i) => el.classList.toggle('is-current', i === at - 1));
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

if (typeof document !== 'undefined') init();
