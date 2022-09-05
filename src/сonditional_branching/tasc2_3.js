// В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат.

export function circleAndSquare(circleP, squareP) {
  const d = 2 * Math.sqrt(circleP / Math.PI);
  const a = Math.sqrt(squareP);
  if (d <= a) {
    return true;
  } 
    return false;
  
}

// радиус круга r = Math.sqrt(circleP / Math.PI)
// диаметр кругаd = 2 * (Math.sqrt(circleP) / Math.PI))
// сторона квадрата a = Math.sqrt(squareP)
