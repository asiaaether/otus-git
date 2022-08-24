import { whoIsYanger } from "./tasc8_3";

describe("whoIsYanger", () => {
  it("", () => {
    expect(whoIsYanger("19.12.1990", "18.12.1990")).toBe("second Yanger");
  });
  it("", () => {
    expect(whoIsYanger("19.12.1990", "20.12.1990")).toBe("first Yanger");
  });
  it("", () => {
    expect(whoIsYanger("19.12.1990", "19.04.1991")).toBe("second Yanger");
  });
});
