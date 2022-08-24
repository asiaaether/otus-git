// Создайте объект user, содержащий поле name со значением ‘John’.
// const user = {
//   name: "John",
// };
// 1 Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.
export function addAgeToUser(user) {
  const age = prompt("enter a number");
  user.age = age;
  return user;
}
