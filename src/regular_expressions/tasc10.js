// Пользователь вводит текстовую строку. Определить с
// помощью регулярного выражения, является ли
// введённая строка:
// 1.Датой.
// 2.Адресом электронной почты.
// 3.*Номером телефона.

export function fun() {
  const input = prompt("enter date or email or phone number");

  const regDate = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
  const regEmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
  const regPhoneNumber =
    /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
  if (input.match(regDate)) {
    return "it is a date";
  }
  if (input.match(regEmail)) {
    return "it is a email";
  }
  if (input.match(regPhoneNumber)) {
    return "it is a phone number";
  }
  return "it is something else";
}
