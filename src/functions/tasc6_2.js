// Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.

export function isWord(str) {
  str = str.split(" ");
  const result = str.length === 1;
  return result;
}
