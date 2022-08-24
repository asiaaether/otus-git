// *Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа

export function sumOfInput() {
  const input = prompt("enter a number", "123");

  let result = input.split("");
  result = result.reduce((sum, current) => +sum + +current, 0);

  console.log(result);
}
