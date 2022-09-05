import { makeInteractiveList } from "./tasc7";

describe("makeInteractiveList", () => {
  let el;
  let button;
  let input;
  beforeEach(() => {
    el = document.createElement("div");
    makeInteractiveList(el);
    button = el.querySelector("button");
    input = el.querySelector("input");
  });

  function getParagraphs() {
    return [...el.querySelectorAll("p")].map((p) => p.innerHTML);
  }

  it("is a function", () => {
    expect(makeInteractiveList).toBeInstanceOf(Function);
  });

  it("makes initial markup", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe("Add");
    expect(button.hidden).toBe(true);

    expect(el.querySelectorAll("p").length).toBe(3);
    expect(getParagraphs()).toEqual(["1", "22", "333"]);
  });

  it("shows or hides the button base on the input content", () => {
    input.value = "123";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBe(false);

    input.value = "";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBe(true);
  });

  it("adds new paragraph on button click", () => {
    const text = `${Math.random}`;
    input.value = text;
    input.dispatchEvent(new Event("input"));
    button.click();
    expect(getParagraphs()).toEqual(["1", "22", "333", text]);
    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
  });

  it("removes first paragraph if total p sum is more than 5", () => {
    const text1 = "4444";
    input.value = text1;
    input.dispatchEvent(new Event("input"));
    button.click();

    const text2 = "55555";
    input.value = text2;
    input.dispatchEvent(new Event("input"));
    button.click();

    const text3 = "666666";
    input.value = text3;
    input.dispatchEvent(new Event("input"));
    button.click();

    expect(getParagraphs()).toEqual(["22", "333", text1, text2, text3]);
  });
});
