export default class DOM {
  static parser({
    template
  }) {
    const parser = new DOMParser();
    const convertString = parser.parseFromString(template, 'text/html');
    const node = convertString.body.firstChild;

    return node;
  }

  static append({
    element,
    target
  }) {
    if (!(element instanceof HTMLElement)) {
      throw new TypeError('Required `element` value is HTMLElement instance');
    }

    document.querySelector(target).appendChild(element);
  }
}
