import DOM from '../../classes/dom';

export default function AppData() {
  const template = `
    <article id="app__data">
      <form id="app__data-form">
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Today is ...">
        <button type="reset">Reset</button>
        <button type="submit">Add</button>
      </form>
    </article></textarea></form></article>
  `.trim();

  const node = DOM.parser({
    template
  });

  return node;
}
