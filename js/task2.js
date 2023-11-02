function nod(a, b) {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

const a = 36;
const b = 48;
const result = nod(a, b);
console.log(`НОД ${a} и ${b} равен ${result}`);
