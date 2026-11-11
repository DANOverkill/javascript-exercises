const totalIntegers = function (input) {
  let count = 0;
  if (Array.isArray(input)) {
    input.forEach((element) => {
      if (typeof element === "number" && element % 1 === 0) {
        count++;
      } else if (Array.isArray(element)) {
        count = count + totalIntegers(element);
      } else if (typeof element === "object") {
        let convertedArr = Object.values(element);
        count = count + totalIntegers(convertedArr);
      }
    });
    return count;
  } else if (typeof input === "object") {
    let convertedArr = Object.values(input);
    return totalIntegers(convertedArr);
  } else {
    return undefined;
  }
};

// Do not edit below this line
module.exports = totalIntegers;
