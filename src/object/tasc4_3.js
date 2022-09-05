import { addAgeToUser } from "./tasc4_1";
import { createAdmin } from "./tasc4_2";
// Создайте объект user, содержащий поле name со значением ‘John’.
// const user = {
//     name: "John",
//   };
// 3 Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.
export function getProps(obj) {
  const user = addAgeToUser(obj);
  const admin = createAdmin(user);
  const { name, age, role } = admin;
  return [name, age, role];
}
