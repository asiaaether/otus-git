import { isWord } from "./tasc6_2";

describe("isWord", () => {
  [
    { str: "hello", result: true },
    { str: "hello world", result: false },
    { str: "hello world !", result: false },
  ].forEach(({ str, result }) => {
    it(`returns ${result} for ${str}`, () => {
      expect(isWord(str)).toBe(result);
    });
  });
});
