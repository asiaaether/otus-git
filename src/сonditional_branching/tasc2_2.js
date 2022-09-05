// Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.)

export function whatMonth() {
  const num = prompt("enter a number from 1 to 12", "1");
  switch (num) {
    case "1":
      console.log("Январь");
      break;
    case "2":
      console.log("Февраль");
      break;
    case "3":
      console.log("март");
      break;
    case "4":
      console.log("Апрель");
      break;
    case "5":
      console.log("Май");
      break;
    case "6":
      console.log("Июнь");
      break;
    case "7":
      console.log("Июль");
      break;
    case "8":
      console.log("Август");
      break;
    case "9":
      console.log("Сентябрь");
      break;
    case "10":
      console.log("Октябрь");
      break;
    case "11":
      console.log("Ноябрь");
      break;
    case "12":
      console.log("Декабрь");
      break;
    default:
      console.log("Такого месяца не существует");
  }
}
