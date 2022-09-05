import { diff } from "./tasc6_1";

describe("diff", () => {
  [
    { a: 1, b: 10, result: 9 },
    { a: 10, b: 15, result: 5 },
    { a: 8, b: 8, result: 0 },
  ].forEach(({ a, b, result }) => {
    it(`returns ${result} for ${a} and ${b}`, () => {
      expect(diff(a, b)).toBe(result);
    });
  });
});
