import { expect, test } from 'bun:test';
import { LAYERS, STOPS, plateOpacity, pose } from './flight';
import { layers } from '../data/site';

test('the camera rests at each stop and a little around it', () => {
  expect(pose(0)).toEqual(STOPS[0]);
  expect(pose(3)).toEqual(STOPS[3]);
  expect(pose(3.1)).toEqual(STOPS[3]);
  expect(pose(2.9)).toEqual(STOPS[3]);
  expect(pose(99)).toEqual(STOPS[STOPS.length - 1]);
});

test('halfway between two layers the camera is halfway down', () => {
  expect(pose(2.5).fi).toBeCloseTo(1.5);
});

test('inside the stack, plates behind the camera are gone and the focused one is solid', () => {
  const c = pose(3); // looking at plate 2
  expect(plateOpacity(1, c)).toBe(0);
  expect(plateOpacity(2, c)).toBe(1);
  expect(plateOpacity(3, c)).toBeLessThan(1);
});

test('in the overviews every plate is fully visible', () => {
  for (const c of [pose(0), pose(STOPS.length - 1)]) for (let j = 0; j < LAYERS; j++) expect(plateOpacity(j, c)).toBe(1);
});

test('there is one stop per layer in the copy, plus the opening and the end', () => {
  expect(LAYERS).toBe(layers.length);
  expect(STOPS.length).toBe(layers.length + 2);
});
