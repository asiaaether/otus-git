import { getCircleS } from "./tasc9_2";

describe("getCircleS", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { input: "6", result: "длина окружности: 37.70, площадь: 113.10" },
    { input: "10", result: "длина окружности: 62.83, площадь: 314.16" },
    { input: "9", result: "длина окружности: 56.55, площадь: 254.47" },
  ].forEach(({ input, result }) => {
    it(`prints ${result} for ${input}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);
      jest.spyOn(console, "log");

      getCircleS();

      expect(console.log).toBeCalledWith(result);
    });
  });
});
