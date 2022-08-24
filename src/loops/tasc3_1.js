// Вывести в консоль сумму всех целых чисел от 50 до
// 100.

export function numbers(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i;
  }
  console.log(result);
}
