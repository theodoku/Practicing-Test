stringLength = (string) => {
    if (string.length > 0 && string.length <= 10) {
        return string.length;
    } else {
        throw new Error("string length should be 1-10 char");
    };  
};

reverseString = (string) => {
    return string.split("").reverse().join("");
};

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  }
  
capitalizeFirstChar = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

module.exports = {
    stringLength,
    reverseString,
    capitalizeFirstChar,
    Calculator
  };