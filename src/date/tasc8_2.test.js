import { getMinutsToday } from "./tasc8_2";

describe("getMinutsToday", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Date.now = jest.fn(() => 1327585910417)
  });

  it(`returns how many minutes have passed since the beginning of day`, () => {
    jest.spyOn(console, "log");
    jest.spyOn(Date, "now").mockImplementation(() => 1661847052193);
    // jest.spyOn(Date, "today").mockImplementation(() => 1661847052193);
    getMinutsToday();
    expect(console.log).toBeCalledWith(674);
  });
});
