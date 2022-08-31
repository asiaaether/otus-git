import { getMinutsToday } from "./tasc8_2";

describe("getMinutsToday", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`returns how many minutes have passed since the beginning of day`, () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1661847052193);
    jest.spyOn(console, "log");
    getMinutsToday();
    expect(console.log).toBeCalledWith(670);
  });

  it(`returns how many minutes have passed since the beginning of day`, () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1661337052193);
    jest.spyOn(console, "log");
    getMinutsToday();
    expect(console.log).toBeCalledWith(810);
  });

  it(`returns how many minutes have passed since the beginning of day`, () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1661997052193);
    jest.spyOn(console, "log");
    getMinutsToday();
    expect(console.log).toBeCalledWith(290);
  });
});
