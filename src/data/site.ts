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
  title: 'Products are complex. Skip finding out yourself.',
  text: 'It starts as a box on a page. Scroll, and watch what it needs before anyone can use it.',
};

// One entry per build stage. `name` is the caption under the figure; the order is the order of the
// figure's layers (src/components/Figure.astro).
export const stages = [
  { id: 'wireframe', name: 'wireframe', title: 'It starts with boxes on a page.', text: 'This is the cheap part. It is also where most of the decisions get made, long before any code exists.' },
  { id: 'frontend', name: 'frontend', title: 'Then it looks finished.', text: 'The boxes become an interface people can touch. Nothing behind it works yet. This is where most demos stop.' },
  { id: 'server', name: 'server + database', title: 'Now the button has to do something.', text: "Requests go out, answers come back, and the data has to live somewhere it won't get lost." },
  { id: 'auth', name: 'authentication', title: 'Who is allowed in?', text: 'Sign-in, sessions, permissions. Invisible when it is right, expensive when it is wrong.' },
  { id: 'cloud', name: 'cloud', title: 'It has to stay up while you sleep.', text: 'Everything above needs somewhere to run. One machine becomes several, with deploys, scaling, monitoring and backups.' },
  { id: 'models', name: 'ML models', title: 'And then it should think.', text: 'Models read, classify and answer in the background. They are slow, costly and sometimes wrong, so they need queues and checks.' },
];

export const close = {
  title: 'That was one product.',
  text: "I'm Kevin Kraus, a product engineer in Hamburg. I have taken products from a sketch to production many times, so you don't have to find out each of these steps yourself.",
};
