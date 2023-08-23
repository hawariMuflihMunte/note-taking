export default function Header() {
  const template = `
    <header id="app__header">
      <h1>Daily Note</h1>
    </header>
  `.trim();

  const parser = new DOMParser();
  const elem = parser.parseFromString(template, 'text/html');
  const node = elem.body.firstChild;

  return node;
}

