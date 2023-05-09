// Kita definisikan fungsi aritmatika dari fungsi kalkulator
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

// Berikut adalah fungsi yang mendefinisikan kalkulator
function calculate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// Menghitung nilai ekspresi (1 + 2) * (3 - 2) / 3;
let result = calculate(
    divide,
    calculate(
                multiply,
                calculate(
                    add, 1, 2),
                calculate(
                    subtract, 3, 2)),
    3);
console.log(result);