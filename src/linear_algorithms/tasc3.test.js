import { sumOfInput } from "./tasc3";

describe("symbols sum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { input: "123", result: 6 },
    { input: "333", result: 9 },
    { input: "000", result: 0 },
  ].forEach(({ input, result }) => {
    it(`prints ${result} for ${input}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);
      jest.spyOn(console, "log");

      sumOfInput();

      expect(console.log).toBeCalledWith(result);
    });
  });
});
