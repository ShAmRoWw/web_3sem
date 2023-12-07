// Pluralization
function pluralizeRecords(n) {
  function getLastDigit(num) {
    return num % 10;
  }

  function getRecordForm(n) {
    const lastDigit = getLastDigit(n);
    if (n >= 11 && n <= 19) {
      return "записей";
    }
    if (lastDigit === 1) {
      return "запись";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return "записи";
    }
    return "записей";
  }

  const recordForm = getRecordForm(n);
  return `В результате выполнения запроса было найдено ${n} ${recordForm}`;
}

console.log(pluralizeRecords(1115));
console.log(pluralizeRecords(2334));
console.log(pluralizeRecords(5771));
