import { createAdmin } from "./tasc4_2";

describe("createAdmin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      obj: { name: "John", age: 32 },
      admin: { name: "John", age: 32, role: "admin" },
    },
    { obj: { name: "Sam" }, admin: { name: "Sam", role: "admin" } },
    { obj: { name: "Tony" }, admin: { name: "Tony", role: "admin" } },
  ].forEach(({ obj, admin }) => {
    it("returns new object admin", () => {
      expect(createAdmin(obj)).toEqual(admin);
    });
  });
});
