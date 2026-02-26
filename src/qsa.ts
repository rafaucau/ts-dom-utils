/**
 * QuerySelectorAll wrapper function.
 * @param selector - The selector to match against.
 * @param parent - The ParentNode to search within. Defaults to `document`.
 * @returns A NodeList of all matching Elements.
 *
 * @example
 * const wrapper = qs('div');
 * const buttons = qsa<HTMLButtonElement>('.btn', wrapper);
 */
export default function qsa<K extends keyof HTMLElementTagNameMap>(
  selector: K,
  parent?: ParentNode,
): NodeListOf<HTMLElementTagNameMap[K]>;
export default function qsa<K extends keyof SVGElementTagNameMap>(
  selector: K,
  parent?: ParentNode,
): NodeListOf<SVGElementTagNameMap[K]>;
export default function qsa<K extends keyof MathMLElementTagNameMap>(
  selector: K,
  parent?: ParentNode,
): NodeListOf<MathMLElementTagNameMap[K]>;
export default function qsa<E extends Element = Element>(
  selector: string,
  parent?: ParentNode,
): NodeListOf<E>;
export default function qsa(selector: string, parent: ParentNode = document) {
  return parent.querySelectorAll(selector);
}
