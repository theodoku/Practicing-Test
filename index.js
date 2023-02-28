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
    add = (a, b) => a + b;
    substract = (a, b) => a - b;
    divide = (a, b) => a / b;
    multiply = (a, b) => a * b;
};

capitalizeFirstChar = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

module.export = { stringLength, reverseString, Calculator, capitalizeFirstChar };