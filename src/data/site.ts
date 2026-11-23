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
  who: "I'm Kevin, a product engineer specialising in software architecture and AI engineering. I move products forward, quickly and reliably.",
  cue: 'Scroll to take one apart',
};

// One entry per layer of the stack, top to bottom. `points` are numbered 1..3 and match the
// markers drawn on that layer's plate in src/components/Stack.astro.
export const layers = [
  {
    id: 'interface', label: 'Interface', title: 'What people see',
    text: 'The part everyone judges. It has to hold up in every state, on every screen.',
    points: ['Empty, loading, broken: all designed', 'Works on the phone your user actually has', 'Usable without a mouse'],
  },
  {
    id: 'auth', label: 'Auth', title: 'Who gets in',
    text: 'Invisible when it is right, expensive when it is wrong.',
    points: ['Sessions that end, also on a stolen laptop', 'Roles: nobody sees more than they should', 'Lockout and second factor from day one'],
  },
  {
    id: 'server', label: 'Server', title: 'Where the work happens',
    text: 'Every request is checked before it touches your data.',
    points: ['Never trust what a client sends', 'Limits, before one client takes you down', 'Backups you have tested'],
  },
  {
    id: 'models', label: 'Models', title: 'Where it thinks',
    text: 'Fast and wrong, or slow and costly. The craft is the balance between them.',
    points: ['Guardrails in and out: users try everything', 'Queues, so slow answers block nobody', 'Evals and agent review: is it still right?'],
  },
  {
    id: 'cloud', label: 'Cloud', title: 'What keeps it up',
    text: 'As much as your product needs, and no more. It stays up while you sleep.',
    points: ['One machine dies, nobody notices', 'A second zone for the day one goes dark', 'Scales and alerts before users notice'],
  },
  {
    id: 'insights', label: 'Insights', title: 'What it tells you',
    text: 'Every click and every request leaves a trail. It shows what to build next, and what to cut.',
    points: ['Events: what people really do', 'Funnels: where they drop off', 'Traces: where the time goes'],
  },
];

export const close = {
  title: 'Building an AI\u2011native product, or adding AI to yours?', // \u2011: a hyphen the line may not break at
  text: "I shipped enterprise\u2011level agentic pipelines at BCG and co\u2011founded HIVESOUND, a voice assistant for 1,000+ beekeepers. Reach out and skip the mistakes I've already made.",
  build: 'Experience decides. Agents execute.', // heading of the build timeline under the text
};
