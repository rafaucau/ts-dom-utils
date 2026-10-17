import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  pack: {
    minify: true,
    format: ['esm', 'cjs'],
    entry: ['src/**/*.ts', '!src/**/__tests__/**'],
    dts: true,
    platform: 'browser',
    publint: true,
    attw: {
      profile: 'node16',
    },
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    singleQuote: true,
    printWidth: 80,
    sortPackageJson: false,
    ignorePatterns: [],
  },
  test: {
    include: ['src/__tests__/*.test.ts'],
    environment: 'jsdom',
  },
});
