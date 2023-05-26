# TS Dom Utils
A lightweight TypeScript library that provides simple wrappers around common DOM manipulation functions.
It allows you to write less code.
Although it's written in TypeScript, it can also be used in JavaScript projects.

## Installation

```shell
# npm
npm install ts-dom-utils
# or Yarn
yarn add ts-dom-utils
```

## Features
- Strong TypeScript typings for better editor autocompletion and error checking.
- Compatible with both TypeScript and JavaScript projects.
- Simple and intuitive API.


## Functions

### `createElement`
Creates a new element with the provided options.

Example
```typescript
import { createElement } from 'ts-dom-utils';

const button = createElement('button', {
  id: 'my-button',
  'aria-expandended': 'false',
  class: ['btn', 'btn-primary'],
  text: 'Click me',
  dataset: {
    action: 'open-modal',
  },
});

document.body.appendChild(button);
```

| Param   | Default   | Description                                                                                                                                                                                    |
|---------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tagName | undefined | The tag name of the element type to create.                                                                                                                                                    |
| options | {}        | The options to use when creating the element. Options can include any attributes that can be passed to `setAttribute`, with `class`, `dataset`, and `text` as special options for enhancement. |
| target  | document  | The Document in which to create the element.                                                                                                                                                   |
---

## `DOMisReady`
`DOMisReady` is a Promise that resolves when the DOM is ready, i.e., when the document's `readyState` is not 'loading'. This can be used to delay script execution until the DOM is fully constructed and can be safely manipulated.

```typescript
import { DOMisReady } from 'ts-dom-utils';

// using then
DOMisReady.then(() => {
  // DOM manipulation code here
});

// using async/await
await DOMisReady;
// DOM manipulation code here
```

---

### `qs`
A wrapper function for `document.querySelector`.

Example
```typescript
import { qs } from 'ts-dom-utils';

const wrapper = qs<HTMLDivElement>('.footer > .buttons');
const button = qs<HTMLButtonElement>('button', wrapper);
```
| Param    | Default    | Description                                         |
|----------|------------|-----------------------------------------------------|
| selector | undefined  | The selector to match against.                      |
| parent   | document   | The ParentNode in which to search for the selector. |

---

### `qsa`
A wrapper function for `document.querySelectorAll`.

Example
```typescript
import { qsa } from 'ts-dom-utils';

const buttons = qsa<HTMLButtonElement>('.btn');
```

| Param    | Default   | Description                                         |
|----------|-----------|-----------------------------------------------------|
| selector | undefined | The selector to match against.                      |
| parent   | document  | The ParentNode in which to search for the selector. |
