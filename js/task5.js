function fibb(n) {
  if (n <= 1) {
    return n;
  }

  if (n > 1000) {
    return "ошибка, число должно быть меньше или равно 1000";
    return;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    const temp = fibCurrent;
    fibCurrent = fibPrev + fibCurrent;
    fibPrev = temp;
  }

  return fibCurrent;
}

const n = 100;
const result = fibb(n);
console.log(`Фибоначчи(${n}) = ${result}`);
