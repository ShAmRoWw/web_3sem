// Возведение в степень
function pow(x, n) {
  if (n < 0) {
    return "Отрицательные степени не поддерживаются";
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
const x = 2;
const n = 3;
const result = pow(x, n);
console.log(`Task1: ${x} в степени ${n} равно ${result}`);