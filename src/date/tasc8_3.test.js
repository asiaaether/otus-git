import { whoIsYanger } from "./tasc8_3";

describe("whoIsYanger", () => {
  it("checks who is yanger for 19.12.1990 and 18.12.1990", () => {
    expect(whoIsYanger("19.12.1990", "18.12.1990")).toBe("first yanger");
  });
  it("checks who is yanger for 19.12.1990 and 20.12.1990", () => {
    expect(whoIsYanger("19.12.1990", "20.12.1990")).toBe("second yanger");
  });
  it("checks who is yanger for 19.12.1990 and 19.04.1991", () => {
    expect(whoIsYanger("19.12.1990", "19.04.1991")).toBe("second yanger");
  });
});
