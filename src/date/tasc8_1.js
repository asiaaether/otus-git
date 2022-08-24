// Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.

export function dayOfWeek() {
  const days = ["Вскр", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const input = prompt("enter a date: dd.mm.yyyy").split(".");
  const [day, month, year] = input;
  const inputDate = new Date(`${year}-${month}-${day}`);
  const result = days[inputDate.getDay()];
  console.log(result);
}
