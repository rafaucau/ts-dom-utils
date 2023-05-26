/**
 * QuerySelectorAll wrapper function.
 * @param selector - The selector to match against.
 * @param parent - The ParentNode in which to search for the selector. Defaults to the entire document.
 */
export default function qsa<E extends Element>(
  selector: string,
  parent: ParentNode = document
): NodeListOf<E> {
  return parent.querySelectorAll<E>(selector);
}
