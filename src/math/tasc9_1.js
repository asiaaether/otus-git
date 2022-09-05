// Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.
export function compareNumbers(a, b) {
  return a - b;
}
export function isTriangleRight(a, b, c) {
  const sides = [a, b, c].sort(compareNumbers);
  let maxSide = sides[2];
  const side1 = sides[0];
  const side2 = sides[1];
  const sumOfSides = side1 ** 2 + side2 ** 2;
  maxSide **= 2;
  console.log(sides);

  return sumOfSides === maxSide;
}
