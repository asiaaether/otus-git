import { math } from "./tasc1";

describe("sum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 3, result: [3, 4] },
    { a: 2, b: 3, result: [6, 5] },
    { a: 0, b: 3, result: [0, 3] },
  ].forEach(({ a, b, result }) => {
    it(`prints ${result} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");

      math(a, b);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
