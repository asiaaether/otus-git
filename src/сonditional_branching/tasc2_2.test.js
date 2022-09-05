import { whatMonth } from "./tasc2_2";

describe("whatMonth", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("prints 'Январь' for '1' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    jest.spyOn(console, "log");
    whatMonth();
    expect(console.log).toBeCalledWith("Январь");
  });

  it("prints 'Декабрь' for '12' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "12");
    jest.spyOn(console, "log");
    whatMonth();
    expect(console.log).toBeCalledWith("Декабрь");
  });

  it("prints 'Август' for '8' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "8");
    jest.spyOn(console, "log");
    whatMonth();
    expect(console.log).toBeCalledWith("Август");
  });
  it("prints 'Сентябрь' for '9' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "9");
    jest.spyOn(console, "log");
    whatMonth();
    expect(console.log).toBeCalledWith("Сентябрь");
  });
  it("prints 'Май' for '5' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    jest.spyOn(console, "log");
    whatMonth();
    expect(console.log).toBeCalledWith("Май");
  });
});
