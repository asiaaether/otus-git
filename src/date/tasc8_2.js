// Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.

export function getMinutsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - today;
  const result = Math.round(diff / 1000 / 60);
  console.log(result);
}

// export function getMinutsToday(day) {
//     let currentDay = Date.parse(day);
//     const now = new Date();

//      if(!day) {
//        currentDay = new Date(now.getFullYear(),
//        now.getMonth(), now.getDate());
//      }

//      let diff = now - currentDay;
//      let result = Math.round(diff / 1000 / 60);
//      console.log(result);
//    }
