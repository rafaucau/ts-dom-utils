/**
 * Create a new element with the provided options.
 * @param tagName - The name of the element type to create.
 * @param options - The options to use when creating the element.
 * @param target - The Document in which to create the element. Defaults to the current document.
 *
 * @example
 * import { createElement } from 'ts-dom-utils';
 *
 * const button = createElement('button', {
 *   id: 'my-button',
 *   class: ['btn', 'btn-primary'],
 *   text: 'Click me',
 *   dataset: {
 *     action: 'open-menu',
 *   },
 *   'aria-expandended': 'false',
 * });

 * document.body.appendChild(button);
 * // <button id="my-button" class="btn btn-primary" data-action="open-menu" aria-expandended="false">Click me</button>
 */
export default function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options: Partial<Omit<HTMLElementTagNameMap[K], keyof SpecialAttributes>> &
    SpecialAttributes = {},
  target = document,
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
        },
      );
      return;
    }

    if (key === 'text') {
      element.textContent = value as string;
      return;
    }

    if (key in element) {
      (element as any)[key] = value;
      return;
    }

    element.setAttribute(key, value as string);
  });

  return element;
}

export type SpecialAttributes = Partial<{
  class: string | string[];
  dataset: Record<string, string>;
  text: string;
}>;
