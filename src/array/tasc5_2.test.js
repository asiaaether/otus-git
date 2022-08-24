import { createNewArr } from "./tasc5_2";

describe("createNewArr", () => {
  [
    { arr: [1, 2, 3], result: [2, 4, 6] },
    { arr: [10, 20, 30], result: [20, 40, 60] },
    { arr: [5, 6, 7], result: [10, 12, 14] },
  ].forEach(({ arr, result }) => {
    it(`returns ${result} for ${arr}`, () => {
      expect(createNewArr(arr)).toEqual(result);
    });
  });
});
