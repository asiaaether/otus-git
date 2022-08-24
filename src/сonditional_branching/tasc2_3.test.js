import { circleAndSquare } from "./tasc2_3";

describe("circleAndSquare", () => {
  it("checks if a circle with area 26 fits inside a square with area 16", () => {
    expect(circleAndSquare(26, 16)).toBe(false);
  });
  it("checks if a circle with area 10 fits inside a square with area 16", () => {
    expect(circleAndSquare(10, 16)).toBe(true);
  });
  it("checks if a circle with area 26 fits inside a square with area 26", () => {
    expect(circleAndSquare(26, 26)).toBe(false);
  });
});
