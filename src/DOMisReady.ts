/**
 * This Promise resolves when the DOM is ready. This can be used to delay script execution
 * until the DOM is fully constructed and can be safely manipulated.
 *
 * @example
 * // using then
 * DOMisReady.then(() => {
 *   // DOM manipulation code here
 * });
 *
 * @example
 * // using async/await
 * (async function() {
 *   await DOMisReady;
 *   // DOM manipulation code here
 * })();
 */
const DOMisReady = new Promise<void>((resolve) => {
  if (document.readyState !== 'loading') {
    return resolve();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      return resolve();
    });
  }
});

export default DOMisReady;
