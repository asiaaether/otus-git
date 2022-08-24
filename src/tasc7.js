export function makeInteractiveList(el) {
  const input = document.createElement("input");
  el.append(input);

  const button = document.createElement("button");
  button.innerHTML = "Add";
  button.hidden = true;
  el.append(button);

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  el.append(p1);
  el.append(p2);
  el.append(p3);
  p1.innerHTML = "1";
  p2.innerHTML = "22";
  p3.innerHTML = "333";

  input.addEventListener("input", () => {
    if (input.value !== "") {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });

  button.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    el.append(newParagraph);
    newParagraph.innerHTML = input.value;
    button.hidden = true;
    input.value = "";

    const paragraphList = el.querySelectorAll("p");
    if (paragraphList.length > 5) {
      paragraphList[0].remove();
    }
  });
}
