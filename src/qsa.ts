/**
 * QuerySelectorAll wrapper function.
 * @param selector - The selector to match against.
 * @param parent - The ParentNode in which to search for the selector. Defaults to the entire document.
 *
 * @example
 * import { qsa } from 'ts-dom-utils';
 * const buttons = qsa<HTMLButtonElement>('.btn');
 *
 * @example
 * import { qsa } from 'ts-dom-utils';
 * const menu = qs<HtmlNavElement>('.menu');
 * const menuButtons = qsa<HTMLButtonElement>('.btn', menu);
 */
export default function qsa<E extends Element>(
  selector: string,
  parent: ParentNode = document,
): NodeListOf<E> {
  return parent.querySelectorAll<E>(selector);
}
