import { defineConfig } from 'tsdown';

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    format: ['esm', 'cjs'],
    entry: ['src/**/*.ts'],
    dts: true,
    platform: 'browser',
  };
});
