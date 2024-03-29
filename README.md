# TS Dom Utils
A lightweight TypeScript library that provides simple wrappers around common DOM manipulation functions.
It allows you to write less code.
Although it's written in TypeScript, it can also be used in JavaScript projects.

## Table of Contents


- [Installation](#installation)
- [Features](#features)
- [Functions](#functions)
    - [createElement](#createelement)
    - [DOMisReady](#domisready)
    - [qs](#qs)
    - [qsa](#qsa)
- [How to Contribute](#how-to-contribute)
- [Support This Project](#support-this-project)

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
- Tree-shakeable


## Functions

### `createElement`
Creates a new element with the provided options.

Example
```typescript
import { createElement } from 'ts-dom-utils';

const button = createElement('button', {
  id: 'my-button',
  class: ['btn', 'btn-primary'],
  text: 'Click me',
  onclick: (event) => {
    console.log('clicked!', event)
  },
  dataset: {
    action: 'open-menu',
  },
  'aria-expandended': 'false',
});

document.body.appendChild(button);
// <button id="my-button" class="btn btn-primary" data-action="open-menu" aria-expandended="false">Click me</button>
```

| Param   | Default   | Description                                                                                                                                                                         |
|---------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tagName | undefined | The tag name of the element type to create.                                                                                                                                         |
| options | {}        | The options to use when creating the element. Options can include any attributes that can be passed to `setAttribute`, with `class`, and `text` as special options for enhancement. |
| target  | document  | The Document in which to create the element.                                                                                                                                        |
---

## `DOMisReady`
`DOMisReady` is a function that returns a Promise. This Promise resolves when the provided DOM is ready, i.e., when the document's readyState is not 'loading'. This can be used to delay script execution until the DOM is fully constructed and can be safely manipulated.
```typescript
import { DOMisReady, qs } from 'ts-dom-utils';

// using then
DOMisReady().then(() => {
  // DOM manipulation code here
});

// using async/await
(async function() {
  await DOMisReady();
  // DOM manipulation code here
})();

// checking if an iframe's document is ready
const iframe = qs<HTMLIFrameElement>('iframe');
DOMisReady(iframe.contentDocument).then(() => {
  // iframe DOM manipulation code here
});

```
| Param | Default   | Description             |
|-------|-----------|-------------------------|
| doc   | document  | The Document to check.  |
---

### `qs`
A wrapper function for `document.querySelector`.

Example
```typescript
import { qs } from 'ts-dom-utils';

const container = qs<HTMLDivElement>('.footer > .buttons');
const button = qs<HTMLButtonElement>('button', container);
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

const menu = qs<HTMLDivElement>('.menu');
const menuButtons = qsa<HTMLButtonElement>('.btn', menu);
```

| Param    | Default   | Description                                         |
|----------|-----------|-----------------------------------------------------|
| selector | undefined | The selector to match against.                      |
| parent   | document  | The ParentNode in which to search for the selector. |

## How to Contribute

We welcome any contributions! If you have an idea for a new feature or tool, please feel free to open an issue to discuss it. You can also submit a pull request if you've developed a feature or fix that you'd like to contribute back.

### Support This Project

This project is developed and maintained by a single developer. If you find it useful and would like to support its continued development, you can do so through [GitHub Sponsors](https://github.com/rafaucau/ts-dom-utils?sponsor=1). Any amount is appreciated!
