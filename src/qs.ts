/**
 * QuerySelector wrapper function.
 * @param selector The selector to match against.
 * @param parent The ParentNode in which to search for the selector.
 * @returns The first Element within the document that matches the specified selector, or group of selectors.
 *
 * @example
 * import { qs } from 'ts-dom-utils';
 * const menu = qs<HTMLDivElement>('.menu');
 * const menuButtons = qsa<HTMLButtonElement>('.btn', menu);
 */
export default function qs<E extends Element>(
  selector: string,
  parent: ParentNode = document
) {
  return parent.querySelector<E>(selector);
}
