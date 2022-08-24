import { numbers } from "./tasc3_1";

describe("numbers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 50, b: 100, result: 3825 },
    { a: 1, b: 15, result: 120 },
    { a: 1, b: 100, result: 5050 },
  ].forEach(({ a, b, result }) => {
    it(`prints ${result} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");

      numbers(a, b);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
