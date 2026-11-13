function buildMid(array, n) {
  const arrMidValues = Array.from({ length: n - 1 }, (_, index) => {
    return array[index] + array[index + 1];
  });
  console.log(arrMidValues);
  const newArr = [1, ...arrMidValues, 1];
  return newArr;
}

const pascal = function (n) {
  if (n === 1) return [1];
  else if (n === 2) return [1, 1];
  else {
    let array = [1, 1];
    while (array.length < n) array = buildMid(array, array.length);
    return array;
  }
};

// Do not edit below this line
module.exports = pascal;
