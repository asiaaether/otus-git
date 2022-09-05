// Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.

// function pow(a, x) {
//     return a ** x;
//   }

export function pow(a, x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= a;
  }
  return result;
}
