/**
 * Create a new element with the provided options.
 * @param tagName - The name of the element type to create.
 * @param options - The options to use when creating the element.
 * @param target - The Document in which to create the element. Defaults to the current document.
 */
export default function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options: CreateElementOptions = {},
  target = document
): HTMLElementTagNameMap[K] {
  const element = target.createElement(tagName);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      if (Array.isArray(value)) {
        element.classList.add(...value);
      } else {
        element.classList.add(value as string);
      }
      return;
    }

    if (key === 'dataset' && typeof value === 'object' && value !== null) {
      Object.entries(value as Record<string, string>).forEach(
        ([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        }
      );
      return;
    }

    if (key === 'text') {
      element.textContent = value as string;
      return;
    }

    element.setAttribute(key, value as string);
  });

  return element;
}

// FIXME try to use string type instead of any
export type CreateElementOptions = {
  [key: string]: any;
  class?: string | string[];
  dataset?: Record<string, string>;
  text?: string;
};
