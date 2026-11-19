// All site copy lives here. Edit this file to change the page.

export const brand = {
  name: 'Agency of One',
  mark: 'A/1',
  person: 'Kevin Kraus',
  email: 'kevin@agency-of-one.dev',
  linkedin: 'https://www.linkedin.com/in/kraus-kevin/',
  cv: 'https://kevinkrs.com',
};

export const hero = {
  title: 'Products are complex.',
  sub: 'Skip finding out yourself.',
  cue: 'Scroll to take one apart',
};

// One entry per layer of the stack, top to bottom. `points` are numbered 1..3 and match the
// markers drawn on that layer's plate in src/components/Stack.astro.
export const layers = [
  {
    id: 'interface', label: 'Interface', title: 'What people see',
    text: 'The part everyone judges. It has to hold up in every state, on every screen.',
    points: ['Loading, empty and error states', 'Fits a phone', 'Works with a keyboard'],
  },
  {
    id: 'auth', label: 'Auth', title: 'Who gets in',
    text: 'Invisible when it is right, expensive when it is wrong.',
    points: ['Sessions that expire', 'Roles: who may see what', 'Reset, lockout, second factor'],
  },
  {
    id: 'server', label: 'Server', title: 'Where the work happens',
    text: 'Every request is checked before it touches your data.',
    points: ['Validate every input', 'Rate limits', 'Backups you have tested'],
  },
  {
    id: 'models', label: 'Models', title: 'Where it thinks',
    text: 'Slow, costly and sometimes wrong. So it gets supervision.',
    points: ['Guardrails in and out', 'Queues for slow work', 'Evals: is it still right?'],
  },
  {
    id: 'cloud', label: 'Cloud', title: 'What keeps it up',
    text: 'No single machine matters. It stays up while you sleep.',
    points: ['Load balancing', 'Redundancy across zones', 'Scaling and alerts'],
  },
  {
    id: 'insights', label: 'Insights', title: 'What it tells you',
    text: 'You cannot fix what you cannot see. Every click and every request leaves a trail.',
    points: ['Events: what people really do', 'Funnels: where they drop off', 'Traces: where the time goes'],
  },
];

export const close = {
  title: 'Building an AI\u2011native product?', // \u2011: a hyphen the line may not break at
  text: "Reach out if you want to speed up your development and skip the mistakes I've already made.",
};
