---
'ts-dom-utils': patch
---

Fix module and types resolution by adding the `"exports"` field to `package.json`. This ensures that correct types (`.d.ts` for ESM and `.d.cts` for CJS) and module formats are loaded depending on the environment and import method (`import` vs `require`), fixing compatibility with modern Node.js and strict bundler configurations.
