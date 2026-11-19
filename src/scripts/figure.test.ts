import { expect, test } from 'bun:test';
import { isOn } from './figure';

test('a layer shows from its stage onwards', () => {
  expect(isOn(2, 3)).toBe(false);
  expect(isOn(3, 3)).toBe(true);
  expect(isOn(6, 3)).toBe(true);
});

test('a layer with an end stage disappears after it', () => {
  expect(isOn(1, 1, 1)).toBe(true);
  expect(isOn(2, 1, 1)).toBe(false);
  expect(isOn(0, 0, 0)).toBe(true);
});
