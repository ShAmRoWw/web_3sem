// Наименьшая цифра
function minDigit(x) {
  if (x < 0) {
    throw new Error("Число должно быть неотрицательным");
  }

  if (x === 0) {
    return 0;
  }

  let min = 9; // Начальное значение минимальной цифры

  while (x > 0) {
    const digit = x - (x % 10); // Получаем последнюю цифру числа
    if (digit < min) {
      min = digit;
    }

    x = (x - digit) / 10; // Убираем последнюю цифру
  }

  return min;
}

const number = 583109;
const result = minDigit(number);
console.log(`Наименьшая цифра в числе ${number} - ${result}`);
