// Scroll position picks the stage; the stage decides which figure layers are drawn.

export const isOn = (stage: number, from: number, to = Infinity) => stage >= from && stage <= to;

function init() {
  const fig = document.querySelector<HTMLElement>('[data-figure]');
  if (!fig) return;
  const layers = [...fig.querySelectorAll<SVGElement>('[data-from]')];
  const names: string[] = JSON.parse(fig.dataset.names ?? '[]');
  const ns = document.querySelectorAll('[data-fig-n]');
  const nameEls = document.querySelectorAll('[data-fig-name]');

  const set = (stage: number) => {
    document.documentElement.dataset.stage = String(stage);
    for (const l of layers) {
      const from = Number(l.dataset.from);
      const to = l.dataset.to ? Number(l.dataset.to) : Infinity;
      l.classList.toggle('is-on', isOn(stage, from, to));
      l.classList.toggle('is-new', stage === from && from > 0);
    }
    ns.forEach((el) => (el.textContent = String(stage)));
    nameEls.forEach((el) => (el.textContent = names[stage] ?? ''));
  };

  fig.classList.add('js'); // without JS the whole figure stays drawn
  // ?stage=4 pins a stage, for working on the figure and for screenshots.
  const pinned = new URLSearchParams(location.search).get('stage');
  if (pinned !== null) return set(Number(pinned));
  set(0);
  // The line sits below the middle so it also clears the figure pinned on top on phones.
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) set(Number((e.target as HTMLElement).dataset.stage));
    },
    { rootMargin: '-60% 0px -40% 0px' },
  );
  document.querySelectorAll('section[data-stage]').forEach((s) => io.observe(s));
}

if (typeof document !== 'undefined') init();
