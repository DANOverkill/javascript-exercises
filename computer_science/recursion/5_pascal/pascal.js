function buildMid(array, n) {
  const arrMidValues = Array.from({ length: n - 2 }, (_, index) => {
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
    array = buildMid(array, array.length);
    if ((array.length = n + 1)) return array;
    else buildMid(buildMid(array, array.length));
  }
};

// Do not edit below this line
module.exports = pascal;
