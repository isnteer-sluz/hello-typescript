import { isTriplet } from "./pythagoras";

test("should return true for a valid triplet", () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test("should return false for a not valid triplet", () => {
  expect(isTriplet(2, 3, 4)).toBe(false);
});