// Создайте массив целых чисел из 10 элементов.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 Выведите в консоль сумму всех элементов массива.
export function sumOfArrElements(arr) {
  const result = arr.reduce((sum, el) => sum + el);
  console.log(result);
}
