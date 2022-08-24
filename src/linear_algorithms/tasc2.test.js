import { sumOfSymbols } from "./tasc2";

describe("sumOfSymbols", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: "hi", b: "sam", result: 5 },
    { a: "hello", b: "world", result: 10 },
    { a: "no", b: "idea", result: 6 },
  ].forEach(({ a, b, result }) => {
    it(`prints ${result} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");

      sumOfSymbols(a, b);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
