const permute = (arr) => {
  let length = arr.length;
  let newArr = [];
  while (newArr.length < length) {
    let value = arr[Math.floor(Math.random() * arr.length)];
    if (!newArr.includes(value)) {
      newArr.push(value);
    }
  }
  return newArr;
};

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const generate = (finalArr, arr, finalArrLength) => {
  let array = permute(arr);
  const exists = finalArr.some((innerArr) =>
    innerArr.every((value, index) => value === array[index]),
  );
  if (finalArr.length === finalArrLength) {
    return;
  } else if (!exists) {
    finalArr.push(array);
    generate(finalArr, arr, finalArrLength);
  } else {
    generate(finalArr, arr, finalArrLength);
  }
};

const permutations = function (arr) {
  let finalArr = [];
  let finalArrLength = factorial(arr.length);
  if (finalArrLength < 2 && finalArrLength >= 0) {
    finalArr.push(arr);
  } else {
    generate(finalArr, arr, finalArrLength);
  }
  return finalArr;
};
//
// Do not edit below this line
module.exports = permutations;
