import { afterEach, expect, it, vi } from 'vite-plus/test';
import DOMisReady from '../DOMisReady';

afterEach(() => {
  vi.restoreAllMocks();
});

it.each(['interactive', 'complete'] as const)(
  'resolves when the document is %s',
  async (state) => {
    vi.spyOn(document, 'readyState', 'get').mockReturnValue(state);

    await expect(DOMisReady()).resolves.toBeUndefined();
  },
);

it('waits for DOMContentLoaded on the provided document', async () => {
  const target = document.implementation.createHTMLDocument();
  vi.spyOn(target, 'readyState', 'get').mockReturnValue('loading');
  const onReady = vi.fn();
  const ready = DOMisReady(target).then(onReady);

  await Promise.resolve();
  expect(onReady).not.toHaveBeenCalled();

  target.dispatchEvent(new Event('DOMContentLoaded'));
  await ready;
  expect(onReady).toHaveBeenCalledOnce();
});
