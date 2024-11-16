// Command Line Calculator

// functions with two arguments and returns the result of the operation.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Error: You can't divide by zero you goob.");
    }
    return a / b;
}

// supported operators in an array.
const operators = ['+', '-', '*', '/'];

// operators are keys and the values are the functions.
const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

// validates and parses command line arguments then skips the first two arguments.
const args = process.argv.slice(2);

// make sure that user uses the right amount of arguments.
if (args.length !== 3) {
    console.log("Usage: node calculator.js <number1> <operator> <number2>");
    process.exit(1);
}

// declare operands to be parsed.
const operand1 = parseFloat(args[0]);
const operator = args[1];
const operand2 = parseFloat(args[2]);

// makes sure that operands used are legitimate numbers.
if (isNaN(operand1) || isNaN(operand2)) {
    console.log("Error: Both operands must be actual numbers bro.");
    process.exit(1);
}

// makes sure that the operator used is supported.
if (!operators.includes(operator)) {
    console.log(`Error: Invalid operator LMAO. Supported operators are ${operators.join(', ')}`);
    process.exit(1);
}

// performs the operation and produces results. if catches error it will display the error message.
try {
    const result = operations[operator](operand1, operand2);
    console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}