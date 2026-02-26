/**
 * QuerySelector wrapper function.
 * @param selector - The selector to match against.
 * @param parent - The ParentNode to search within. Defaults to `document`.
 * @returns The first matching Element, or `null`.
 *
 * @example
 * const wrapper = qs('div');
 * const btn = qs<HTMLButtonElement>('.btn', wrapper);
 */
export default function qs<K extends keyof HTMLElementTagNameMap>(
  selector: K,
  parent?: ParentNode,
): HTMLElementTagNameMap[K] | null;
export default function qs<K extends keyof SVGElementTagNameMap>(
  selector: K,
  parent?: ParentNode,
): SVGElementTagNameMap[K] | null;
export default function qs<K extends keyof MathMLElementTagNameMap>(
  selector: K,
  parent?: ParentNode,
): MathMLElementTagNameMap[K] | null;
export default function qs<E extends Element = Element>(
  selector: string,
  parent?: ParentNode,
): E | null;
export default function qs(selector: string, parent: ParentNode = document) {
  return parent.querySelector(selector);
}
