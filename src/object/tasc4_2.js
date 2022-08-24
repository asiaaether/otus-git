// Создайте объект user, содержащий поле name со значением ‘John’.
// const user = {
//     name: "John",
//   };

// 2 Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением
// ‘admin’.

export function createAdmin(obj) {
  const admin = { ...obj, name: "admin", role: "admin"};
  return admin;
}
