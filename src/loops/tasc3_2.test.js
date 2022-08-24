import { multTable } from "./tasc3_2";

describe("multTable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      number: 7,
      result: [
        "7 * 1 = 7",
        "7 * 2 = 14",
        "7 * 3 = 21",
        "7 * 4 = 28",
        "7 * 5 = 35",
        "7 * 6 = 42",
        "7 * 7 = 49",
        "7 * 8 = 56",
        "7 * 9 = 63",
      ],
    },
    {
      number: 9,
      result: [
        "9 * 1 = 9",
        "9 * 2 = 18",
        "9 * 3 = 27",
        "9 * 4 = 36",
        "9 * 5 = 45",
        "9 * 6 = 54",
        "9 * 7 = 63",
        "9 * 8 = 72",
        "9 * 9 = 81",
      ],
    },
    {
      number: 3,
      result: [
        "3 * 1 = 3",
        "3 * 2 = 6",
        "3 * 3 = 9",
        "3 * 4 = 12",
        "3 * 5 = 15",
        "3 * 6 = 18",
        "3 * 7 = 21",
        "3 * 8 = 24",
        "3 * 9 = 27",
      ],
    },
  ].forEach(({ number, result }) => {
    it(`prints ${result} for ${number}`, () => {
      jest.spyOn(console, "log");

      multTable(number);

      expect(console.log).toBeCalledWith(result);
    });
  });
});
