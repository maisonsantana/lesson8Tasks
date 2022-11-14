"use strict";

// 1. Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative".

let num = 66;
if (num >= 0) {
  console.log("positive");
} else {
  console.log("negative");
}

// -------------------------------

// 2.  Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання, інакше - вивести результат множення.

// Решил поэкспериментировать и сделать с помощью промпта.

const num1 = Number(prompt("write a number"));
let num2 = 25;

if (num1 > num2) {
  console.log(num1 - num2);
} else {
  console.log(num1 * num2);
}

// -------------------------------

// 3. Якщо значення змінної кратно(тобто ділеться без остачі) на 7 і одночасно кратна 3 - виводимо "you win!", інакше - "you loose".

let number = 21;

if (number % 7 === 0 && number % 3 === 0) {
  console.log("you win!");
} else {
  console.log("you loose :(");
}
