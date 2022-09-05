// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N

export function fun() {
  const arr = [];
  const input = +prompt("enter a number", 10);
  for (let i = 1; i <= input; i += 2) {
    arr.push(i);
  }
  const result = arr.reduce((sum, el) => sum + el) / arr.length;
  console.log(result);
}
