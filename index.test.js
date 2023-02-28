const { stringLength, reverseString, Calculator, capitalizeFirstChar } = require("./index.js");
const calculator = new Calculator();

// Task 1 => Test Case 1
test("Should output string character count", () => {
    const output = stringLength("string");
    expect(output).toBe(6);
});

// Task 1 => Test Case 2
test("Check whether string length is between 1-10", () => {
    const output = () => stringLength("lenghtyString");
    expect(output).toThrow();
});

// Task 2
test("Should output reversed string", () => {
    const output = reverseString("string");
    expect(output).not.toBe("string");
});

// Task 3 => Test Case 1
describe("Check Add Calculator", () => {
    test("Should return sum of numbers", () => {
        expect(calculator.add(10, 10)).toBe(20);
    });
    test("Should return sum of numbers", () => {
        expect(calculator.add(10, -30)).not.toBe(20);
    });
    test("Should return sum of numbers", () => {
        expect(calculator.add(10, 30)).toBe(40);
    });
});

// Task 3 => Test Case 2
describe("Check Subtract Calculator", () => {
    test("Should return subtraction result", () => {
        expect(calculator.subtract(10, 10)).toBe(0);
    });
    test("Should return subtraction result", () => {
        expect(calculator.subtract(10, -30)).not.toBe(20);
    });
    test("Should return subtraction result", () => {
        expect(calculator.subtract(10, 30)).toBe(-20);
    });
});

// Task 3 => Test Case 3
describe("Check Divide Calculator", () => {
    test("Should return division result", () => {
        expect(calculator.divide(10, 10)).toBe(1);
    });
    test("Should return division result", () => {
        expect(calculator.divide(10, -30)).not.toBe(20);
    });
    test("Should return division result", () => {
        expect(calculator.divide(100, 10)).toBe(10);
    });
});

// Task 3 => Test Case 4
describe("Check Multiply Calculator", () => {
    test("Should return multiplication result", () => {
        expect(calculator.multiply(10, 10)).toBe(100);
    });
    test("Should return multiplication result", () => {
        expect(calculator.multiply(10, -30)).not.toBe(20);
    });
    test("Should return multiplication result", () => {
        expect(calculator.multiply(100, 10)).toBe(1000);
    });
});

// Task 4
test("Should capitalized first char", () => {
    const output = capitalizeFirstChar("string");
    expect(output).toBe("String");
});
