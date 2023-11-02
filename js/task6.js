function getSortedArray(array, key) {
    // Реализуем алгоритм сортировки пузырьком
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        // Сравниваем значения объектов по ключу и меняем их местами, если необходимо
        if (array[j][key] > array[j + 1][key]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  
  const objects = [
    { name: 'Anton', age: 30 },
    { name: 'Max', age: 25 },
    { name: 'Vanya', age: 35 }
  ];
  
  const sortedObjects = getSortedArray(objects, 'age');
  console.log(sortedObjects);
  