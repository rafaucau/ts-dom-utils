/**
 * This Promise resolves when the DOM is ready. This can be used to delay script execution
 * until the DOM is fully constructed and can be safely manipulated.
 *
 * @example
 * import { DOMisReady } from 'ts-dom-utils';
 * // using then
 * DOMisReady.then(() => {
 *   // DOM manipulation code here
 * });
 *
 * @example
 * import { DOMisReady } from 'ts-dom-utils';
 * // using async/await
 * (async function() {
 *   await DOMisReady;
 *   // DOM manipulation code here
 * })();
 */
export default new Promise<void>((resolve) => {
  if (document.readyState !== 'loading') {
    return resolve();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      return resolve();
    });
  }
});
