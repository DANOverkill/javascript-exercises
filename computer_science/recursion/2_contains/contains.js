const contains = function (obj, value) {
  for (let key in obj) {
    if (Number.isNaN(obj[key]) && Number.isNaN(value)) {
      return true;
    }
    if (obj[key] === value) {
      return true;
    }
    if (typeof obj[key] === "object") {
      if (contains(obj[key], value) === true) {
        return true;
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
