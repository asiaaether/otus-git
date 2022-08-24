// Создайте массив целых чисел из 10 элементов.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3 *Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.
export function findMinAndMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const result = `Min: ${min}, Max: ${max}`;
  console.log(result);
}
