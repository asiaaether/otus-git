import { getProps } from "./tasc4_3";

describe("getProps", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { obj: { name: "admin", role: "admin" }, result: ["admin", "admin"] },
  ].forEach(({ obj, result }) => {
    it("returns new object admin", () => {
      expect(getProps(obj)).toEqual(result);
    });
  });
});
