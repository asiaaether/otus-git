// *В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

export function whoIsYanger(first, second) {
  const now = new Date();
  first = first.split(".");
  second = second.split(".");

  const [day1, month1, year1] = first;
  const [day2, month2, year2] = second;

  first = new Date(`${year1}-${month1}-${day1}`);
  second = new Date(`${year2}-${month2}-${day2}`);

  const a = now - first;
  const b = now - second;

  return a < b ? "second Yanger" : "first Yanger";
}
