export default class DOM {
  static parser({
    template
  }) {
    const parser = new DOMParser();
    const convertString = parser.parseFromString(template, 'text/html');
    const node = convertString.body.firstChild;

    return node;
  }
}
