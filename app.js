const number = +prompt("Введите номер задания (от 1 до 4) : ");

switch (number) {
  case 1:
    console.log("Чётные числа")
    let a = 1;

    while (a < 100) {
      if (a % 2 == 0) console.log(a);
      a++;
    }
    break;

  case 2:
    console.log("Чтсла до 100 которые делаятся на 3 и 5")
    for (let i = 1; i < 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) console.log(i);
    }
    break;

  case 3:
    let b;
    do {
      b = +prompt("Введите число больше 100")
    } while(b <= 100 && b)
    break;

  case 4:
    console.log("Таблица умножения на 56")
    for (let i = 1; i < 10; i++) {
      console.log(`${i} * 56 = ${i * 56}`);
    }
    break;

  default:
    alert("Такого задания не было");
}
