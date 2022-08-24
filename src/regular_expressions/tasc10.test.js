import { fun } from "./tasc10";

describe("fun", () => {
  it("checks is it a date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "24.08.2022");
    expect(fun()).toBe("it is a date");
  });
  it("checks is it a date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+79991330333");
    expect(fun()).toBe("it is a phone number");
  });
  it("checks is it a date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "aaa@email.ru");
    expect(fun()).toBe("it is a email");
  });
  it("checks is it a date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "qwer");
    expect(fun()).toBe("it is something else");
  });
});
