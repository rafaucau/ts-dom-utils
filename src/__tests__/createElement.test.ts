import { it, expect } from 'vite-plus/test';
import createElement from '../createElement';

it('accepts a single class name', () => {
  const element = createElement('div', { class: 'test' });
  expect(element.className).toBe('test');
});

it('accepts an array of class names', () => {
  const element = createElement('div', { class: ['test', 'test2'] });
  expect(element.className).toBe('test test2');
});

it('creates an element without classes', () => {
  const element = createElement('div');
  expect(element.className).toBe('');
});

it.todo('accepts space-separated class names', () => {
  const element = createElement('div', { class: 'test test2' });
  expect(element.className).toBe('test test2');
});

it.todo('accepts an empty class string', () => {
  const element = createElement('div', { class: '' });
  expect(element.className).toBe('');
});

it('sets text content', () => {
  const text = 'Test';
  const element = createElement('div', { text });
  expect(element.textContent).toBe(text);
});

it('sets data attributes', () => {
  const element = createElement('div', {
    dataset: { test: 'test', test2: 'test2' },
  });
  expect(element.dataset['test']).toBe('test');
  expect(element.dataset['test2']).toBe('test2');
});

it('sets inline styles', () => {
  const element = createElement('div', {
    style: { color: 'red', display: 'none' },
  });
  expect(element.style.color).toBe('red');
  expect(element.style.display).toBe('none');
});

it('sets element properties', () => {
  const element = createElement('button', { id: 'submit', disabled: true });
  expect(element.id).toBe('submit');
  expect(element.disabled).toBe(true);
});

it('sets ARIA attributes', () => {
  const element = createElement('button', { 'aria-expanded': 'false' });
  expect(element.getAttribute('aria-expanded')).toBe('false');
});

it('creates an element in the provided document', () => {
  const target = document.implementation.createHTMLDocument();
  const element = createElement('div', {}, target);
  expect(element.ownerDocument).toBe(target);
});

it('calls the click handler', () => {
  let count = 0;

  const element = createElement('button', {
    on: {
      click: () => count++,
    },
  });

  element.click();
  expect(count).toBe(1);
});

it('calls the handler only once when once is enabled', () => {
  let count = 0;
  const element = createElement('button', {
    on: {
      click: {
        handler: () => count++,
        options: { once: true },
      },
    },
  });

  element.click();
  element.click();

  expect(count).toBe(1);
});
