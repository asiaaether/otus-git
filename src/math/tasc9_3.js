// Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
export function quadraticEquation(a, b, c) {
  if (a === 0) return false;
  const result = {};
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return false;
  }
  result.discriminant = D;
  if (D === 0) {
    result["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
  } else if (D > 0) {
    const tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    result["quadratic roots"] = tmp;
  }
  return result;
}
