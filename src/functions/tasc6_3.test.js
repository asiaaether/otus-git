import { pow } from "./tasc6_3";

describe("pow", () => {
  [
    { a: 2, b: 3, result: 8 },
    { a: 5, b: 2, result: 25 },
    { a: 3, b: 2, result: 9 },
  ].forEach(({ a, b, result }) => {
    it(`returns ${result} for ${a} and ${b}`, () => {
      expect(pow(a, b)).toBe(result);
    });
  });
});
