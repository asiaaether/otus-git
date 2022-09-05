import { getProps } from "./tasc4_3";

describe("getProps", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      obj: { name: "John" },
      input: "31",
      result: ["John", "31", "admin"],
    },
    {
      obj: { name: "Sam" },
      input: "55",
      result: ["Sam", "55", "admin"],
    },
    {
      obj: { name: "Tony" },
      input: "32",
      result: ["Tony", "32", "admin"],
    },
  ].forEach(({ obj, input, result }) => {
    it("returns properties of object", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);

      expect(getProps(obj)).toEqual(result);
    });
  });
});
