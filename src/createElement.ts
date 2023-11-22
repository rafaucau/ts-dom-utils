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
 *   onclick: (event) => {
 *    console.log('clicked!', event)
 *   },
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
  options: CreateElementOptions<K> = {},
  target = document,
): HTMLElementTagNameMap[K] {
  const element = target.createElement(tagName);
  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    // class key
    if (key === 'class') {
      // class can be a string or an array of strings
      if (Array.isArray(value)) {
        element.classList.add(...value);
      } else if (typeof value === 'string') {
        element.classList.add(value);
      }
    }
    // text key
    else if (key === 'text') {
      element.textContent = value;
    }
    // any other key
    else if (key in element) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          (element as any)[key][subKey] = subValue;
        });
      } else {
        (element as any)[key] = value;
      }
    }
    // any other attribute
    else {
      element.setAttribute(key, value);
    }
  });

  return element;
}

type SpecialAttributes = {
  class?: string | string[];
  text?: string;
  style?: Partial<CSSStyleDeclaration>;
};

export type CreateElementOptions<K extends keyof HTMLElementTagNameMap> =
  (Partial<Omit<HTMLElementTagNameMap[K], keyof SpecialAttributes>> &
    SpecialAttributes) & { [key: string]: any };
