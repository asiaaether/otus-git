// В переменных a и b хранятся числа.
// Написать программу, которая выводит в консоль произведениеи сумму этих чисел.

export function math(a, b) {
  const product = a * b;
  const sum = a + b;
  const result = [product, sum];
  console.log(result);
}
