// Создайте объект user, содержащий поле name со значением ‘John’.
// const user = {
//     name: "John",
//   };
// 3 Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.
export function getProps(obj) {
  const { name, role } = obj;
  return [name, role];
}
