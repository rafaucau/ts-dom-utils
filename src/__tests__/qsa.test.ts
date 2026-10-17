import { afterEach, expect, it } from 'vite-plus/test';
import qsa from '../qsa';

afterEach(() => {
  document.body.replaceChildren();
});

it('finds elements by class name', () => {
  const element = document.createElement('div');
  element.classList.add('qsa-test');
  document.body.appendChild(element);

  const foundElements = qsa<HTMLDivElement>('.qsa-test');
  expect(foundElements).toHaveLength(1);
  expect(foundElements[0]).toBe(element);
});

it('returns an empty array if no elements are found', () => {
  const foundElements = qsa<HTMLDivElement>('.non-existent');
  expect(foundElements).toHaveLength(0);
});

it('searches only within the provided parent', () => {
  const globalElement = document.createElement('span');
  globalElement.classList.add('qsa-test');
  document.body.appendChild(globalElement);

  const wrapper = document.createElement('section');
  document.body.appendChild(wrapper);

  const element = document.createElement('div');
  element.classList.add('qsa-test');
  wrapper.appendChild(element);

  const foundElements = qsa<HTMLDivElement>('.qsa-test', wrapper);
  expect(foundElements[0]).toBe(element);
});
