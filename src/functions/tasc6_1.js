// Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.

export function diff(a, b) {
  // const max = Math.max(a, b);
  // const min = Math.min(a, b);
  // const result = max - min;
  // return result;

  let result;
  if (a > b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return result;
}
