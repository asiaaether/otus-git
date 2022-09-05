import { quadraticEquation } from "./tasc9_3";

describe("quadraticEquation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 12, c: 36, result: { discriminant: 0, "quadratic roots": -6 } },
    {
      a: 1,
      b: 6,
      c: 5,
      result: { discriminant: 16, "quadratic roots": [-1, -5] },
    },
    { a: 1, b: -6, c: 9, result: { discriminant: 0, "quadratic roots": 3 } },
    { a: 1, b: -3, c: 10, result: false },
  ].forEach(({ a, b, c, result }) => {
    it(`prints`, () => {
      expect(quadraticEquation(a, b, c)).toEqual(result);
    });
  });
});
