import { addAgeToUser } from "./tasc4_1";

describe("addAgeToUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      user: { name: "John" },
      input: "31",
      result: { name: "John", age: "31" },
    },
    { user: { name: "Sam" }, input: "55", result: { name: "Sam", age: "55" } },
    {
      user: { name: "Tony" },
      input: "32",
      result: { name: "Tony", age: "32" },
    },
  ].forEach(({ user, input, result }) => {
    it("returns object with new property 'age'", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);

      expect(addAgeToUser(user)).toEqual(result);
    });
  });
});
