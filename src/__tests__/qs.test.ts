import { afterEach, expect, it } from 'vite-plus/test';
import qs from '../qs';

afterEach(() => {
  document.body.replaceChildren();
});

it('finds an element by ID', () => {
  const element = document.createElement('div');
  element.id = 'qs-test';
  document.body.appendChild(element);

  const foundElement = qs<HTMLDivElement>('#qs-test');
  expect(foundElement).toBe(element);
});

it('returns null if no element is found', () => {
  const foundElement = qs<HTMLDivElement>('#non-existent');
  expect(foundElement).toBeNull();
});

it('searches only within the provided parent', () => {
  const globalElement = document.createElement('span');
  globalElement.classList.add('qs-test');
  document.body.appendChild(globalElement);

  const wrapper = document.createElement('section');
  document.body.appendChild(wrapper);

  const element = document.createElement('div');
  element.classList.add('qs-test');
  wrapper.appendChild(element);

  const foundElement = qs<HTMLDivElement>('.qs-test', wrapper);
  expect(foundElement).toBe(element);
});
