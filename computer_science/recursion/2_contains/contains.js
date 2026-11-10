const contains = function (obj, value) {
  //   for (let key in obj) {
  //     if (obj[key] === value) {
  //       return true;
  //     } else if (typeof obj[key] === "object") {
  //       if (contains(obj[key], value) === true) {
  //         return true;
  //       } else {
  //         contains(obj[key], value);
  //       }
  //     } else {
  //       return false;
  //     }
  //   }
  for (let index = 0; index < Object.keys(obj).length; index++) {
    if (obj[index] === value) {
      return true;
    } else if (typeof obj[index] === "object") {
      if (contains(obj[index], value) === true) {
        return true;
      } else {
        contains(obj[index++], value);
      }
    } else {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = contains;
