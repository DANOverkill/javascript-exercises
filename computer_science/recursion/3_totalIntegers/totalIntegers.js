const totalIntegers = function (input) {
  let count = 0;
  if (Array.isArray(input)) {
    input.forEach((element) => {
      if (typeof element === "number" && element % 1 === 0) {
        console.log(element);
        count++;
      } else if (Array.isArray(element)) {
        console.log(element);
        count = count + totalIntegers(element);
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
