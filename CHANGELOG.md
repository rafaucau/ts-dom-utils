# ts-dom-utils

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
