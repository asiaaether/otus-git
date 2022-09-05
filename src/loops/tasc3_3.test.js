import { fun } from "./tasc3_3";

describe("fun", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("prints 5 for '10' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "10");
    jest.spyOn(console, "log");
    fun();
    expect(console.log).toBeCalledWith(5);
  });

  it("prints 8 for '15' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "15");
    jest.spyOn(console, "log");
    fun();
    expect(console.log).toBeCalledWith(8);
  });

  it("prints 50 for '100' entered to prompt", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "100");
    jest.spyOn(console, "log");
    fun();
    expect(console.log).toBeCalledWith(50);
  });
});
