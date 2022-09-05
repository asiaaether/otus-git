import { fun } from "./tasc10";

describe("fun", () => {
  it("checks is it a date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "24.08.2022");
    expect(fun()).toBe("it is a date");
  });
  it("checks is it a phone number", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+79991330333");
    expect(fun()).toBe("it is a phone number");
  });
  it("checks is it a phone number", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "89991330333");
    expect(fun()).toBe("it is a phone number");
  });
  it("checks is it a email", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "aaa@email.ru");
    expect(fun()).toBe("it is a email");
  });
  it("checks is it a email", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementation(() => "some.email@subdomain.domain.ru");
    expect(fun()).toBe("it is a email");
  });
  it("checks is it something else", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "qwer");
    expect(fun()).toBe("it is something else");
  });
  it("checks is it something else", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "22.13.2022");
    expect(fun()).toBe("it is something else");
  });
});
