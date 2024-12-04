function startGame() {
  const first = "Компьютер2: Пробую число ";
  const second = "Компьютер1: ";
  let test = 50;
  console.log("Старт игры!");
  const soughted = Math.floor(Math.random() * 100);
  console.log(`Компьютер1 загадал число ${soughted}, но Компьютер2 об этом не знает!!`);
  
  let i = 1;
  let step = 1;
  while (soughted !== test) {
    console.log(first + test);
    if(soughted === 50) { console.log("Угадал!"); return; }
    step = step < 1 ? 1 : Math.ceil(test / Math.pow(2, i));
    if (soughted > test) {
      console.log(second + "Больше!");
      test += step;
    } else {
      console.log(second + "Меньше!");
      test -= step;
    }
    i++;
    if (soughted === test) {
      console.log(first + test);
      console.log(second + "Угадал!");
      return;
    }
  }
  return;
}
