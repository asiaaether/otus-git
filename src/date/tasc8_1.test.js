import { dayOfWeek } from "./tasc8_1";

describe("dayOfWeek", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { input: "23.08.2022", result: "Вт" },
    { input: "22.08.2022", result: "Пн" },
    { input: "24.08.2022", result: "Ср" },
  ].forEach(({ input, result }) => {
    it(`prints ${result} for ${input}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);
      jest.spyOn(console, "log");

      dayOfWeek();

      expect(console.log).toBeCalledWith(result);
    });
  });
});
