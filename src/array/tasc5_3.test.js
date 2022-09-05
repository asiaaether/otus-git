import { findMinAndMax } from "./tasc5_3";

describe("findMinAndMax", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { arr: [1, 2, 3, 4, 56, 7], result: "Min: 1, Max: 56" },
    { arr: [10, 6, 100, 20, 30], result: "Min: 6, Max: 100" },
    { arr: [5, 0, -1, 6, 900, 7], result: "Min: -1, Max: 900" },
  ].forEach(({ arr, result }) => {
    it(`returns ${result} for ${arr}`, () => {
      jest.spyOn(console, "log");

      findMinAndMax(arr);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
