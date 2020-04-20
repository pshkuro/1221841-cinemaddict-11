export const conditionalTemplate = (condition, template) => condition ? template : ``;

// Генерация случ эл массива
export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

// Shuffle Arr
export const shuffleArray = (arr) => {
  let j = 0;
  let temp = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// Генерация случ числа от мин до макс
export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};


// Генерация случайного числа от мин до макс с округлением до n после запятой
export const getRandomIntegerRoundingNumber = (min, max, n) => {
  return (Math.random() * (max - min)).toFixed(n);
};


// Генерация случ количества случ эл-ов массива
export const getRandomCountRandomArrayItem = (array, count) => {
  const shuffleArr = shuffleArray(array);

  const maxRandomCount = count ? count : shuffleArr.length;

  const randomLength = getRandomIntegerNumber(1, maxRandomCount);
  return shuffleArr.slice(0, randomLength);
};
