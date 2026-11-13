function buildMid(array, n) {
  const arrMidValues = Array.from({ length: n - 1 }, (_, index) => {
    return array[index] + array[index + 1];
  });
  const newArr = [1, ...arrMidValues, 1];
  return newArr;
}

const pascal = function (n, array = [1, 1]) {
  if (n === 1) return [1];
  else if (array.length >= n) return array;
  else {
    const newArr = buildMid(array, array.length);
    return pascal(n, newArr);
  }
};

// Do not edit below this line
module.exports = pascal;
