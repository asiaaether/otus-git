// Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.

export function getCircleS() {
  const R = +prompt("Enter a num");
  const L = 2 * R * Math.PI;
  const S = Math.PI * R ** 2;
  const result = `длина окружности: ${L.toFixed(2)}, площадь: ${S.toFixed(2)}`;
  console.log(result);
}
