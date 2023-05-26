import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    format: ['cjs', 'esm'],
    entry: ['src/**/*.ts'],
    clean: true,
  };
});
