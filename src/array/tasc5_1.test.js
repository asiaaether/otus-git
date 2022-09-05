import { sumOfArrElements } from "./tasc5_1";

describe("sumOfArrElements", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { arr: [1, 2, 3], result: 6 },
    { arr: [10, 20, 30], result: 60 },
    { arr: [5, 6, 7], result: 18 },
  ].forEach(({ arr, result }) => {
    it(`ptints ${result} for ${arr}`, () => {
      jest.spyOn(console, "log");

      sumOfArrElements(arr);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
