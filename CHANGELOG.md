# ts-dom-utils

## 2.3.0

### Minor Changes

- 5880a7b: Add HTML, SVG, and MathML tag name overloads for `qs` and `qsa`, enabling automatic type inference for tag selectors (e.g. `qs('div')` returns `HTMLDivElement | null`)
- a0f525e: Add typed `aria-*` and `data-*` custom attribute support in `CreateElementOptions`
- c69b5e4: Added `on` option to `createElement` for attaching event listeners. Supports a plain handler or an object with `handler` and `options` (e.g. `once`, `passive`).

## 2.2.1

### Patch Changes

- 6cf9275: Fix typo in `aria-expanded` attribute in `createElement` example
- fc35c90: Update publish workflow to use OpenID Connect
- ad96903: Update dependencies

## 2.2.0

### Minor Changes

- 3f66d1e: - Simplified `createElement` to handle all object properties, including style.
  - Fixed issue with styles not applying correctly.
  - Updated style type in `SpecialAttributes` to `Partial<CSSStyleDeclaration>` for editor hints and flexibility.
