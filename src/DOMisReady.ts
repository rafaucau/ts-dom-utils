/**
 * This Promise resolves when the provided DOM is ready.
 * This can be used to delay script execution until the DOM is fully constructed and can be safely manipulated.
 *
 * @param doc - The Document object to check for readiness.
 * Defaults to the global document.
 *
 * @example
 * import { DOMisReady } from 'ts-dom-utils';
 * // using then
 * DOMisReady().then(() => {
 *   // DOM manipulation code here
 * });
 *
 * @example
 * import { DOMisReady } from 'ts-dom-utils';
 * // using async/await
 * (async function() {
 *   await DOMisReady();
 *   // DOM manipulation code here
 * })();
 *
 * @example
 * import { DOMisReady } from 'ts-dom-utils';
 * const iframe = document.querySelector('iframe');
 * // check if the iframe's document is ready
 * DOMisReady(iframe.contentDocument).then(() => {
 *   // iframe DOM manipulation code here
 * });
 */
export default function DOMisReady(doc: Document = document): Promise<void> {
  return new Promise<void>((resolve) => {
    if (doc.readyState !== 'loading') {
      return resolve();
    } else {
      doc.addEventListener('DOMContentLoaded', () => {
        return resolve();
      });
    }
  });
}
