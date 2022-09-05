import { biggestNum } from "./tasc2_1";

describe("biggestNum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 10, result: 10 },
    { a: -1, b: -10, result: -1 },
    { a: 100, b: 77, result: 100 },
  ].forEach(({ a, b, result }) => {
    it(`ptints ${result} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");

      biggestNum(a, b);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
