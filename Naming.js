/**
 * Легкая тренировка в именовании
 * Исходная функция:
 */
function pp(u) {
  let x = 0;
  u.forEach(i => {
    x += i;
  });
  return x;
}

let aa = [10000, 20000, 30000];
console.log(pp(aa));

/**
 * Функция после тренирговки в именовании:
 */
function totalAmount(u) {
  let x = 0;
  u.forEach(i => {
    x += i;
  });
  return x;
}
let threeMainBuyers = [10000, 20000, 30000];
console.log(totalAmount(threeMainBuyers));
