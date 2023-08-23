import DOM from '../classes/dom';

export default function Header() {
  const template = `
    <header id="app__header">
      <h1>Daily Note</h1>
    </header>
  `.trim();

  const node = DOM.parser({
    template
  });

  return node;
}

