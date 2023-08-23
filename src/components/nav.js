import DOM from '../classes/dom';

export default function Nav() {
  const template = `
    <nav id="app__nav">
      <ul>
        <li><button type="button" id="new">New</button></li>
      </ul>
    </nav>
  `.trim();

  const node = DOM.parser({
    template
  });

  return node;
}
