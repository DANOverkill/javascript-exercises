const factorial = function (int) {
  if (typeof int !== "number" || int < 0 || int % 1 !== 0) {
    return undefined;
  } else if (int === 0) {
    return 1;
  } else {
    let solution = int;
    let currentInt = int;
    if (currentInt === 1) {
      return solution;
    } else {
      return (solution = solution * factorial(int - 1));
    }
  }
};

// Do not edit below this line
module.exports = factorial;
