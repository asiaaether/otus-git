// Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63

export function multTable(number) {
  const num = number;
  const result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(`${num} * ${i} = ${num * i}`);
  }
  console.log(result);
}
