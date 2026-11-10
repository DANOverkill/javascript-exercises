const totalIntegers = function (input) {
  if (Array.isArray(input)) {
    let newArr = [];
    input.forEach((element) => {
      if (typeof element === "number") {
        newArr.push(element);
      }
    });
    return newArr.length;
  } else {
    let convertedArr = Object.values(input);
    return totalIntegers(convertedArr);
  }
};

// Do not edit below this line
module.exports = totalIntegers;
