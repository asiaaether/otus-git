import { isTriangleRight } from "./tasc9_1";

describe("isTriangleRight", () => {
  [
    { a: 7, b: 24, c: 25, result: true },
    { a: 12, b: 9, c: 15, result: true },
    { a: 13, b: 12, c: 50, result: false },
  ].forEach(({ a, b, c, result }) => {
    it(`returns ${result} for triangl with sides ${a}, ${b}, ${c}`, () => {
      expect(isTriangleRight(a, b, c)).toBe(result);
    });
  });
});
