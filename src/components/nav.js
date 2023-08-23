import DOM from '../classes/dom';

export default function Nav() {
  const template = `
    <nav id="app__nav">
      <button type="button" id="new">New</button>
    </nav>
  `.trim();

  const node = DOM.parser({
    template
  });

  return node;
}
