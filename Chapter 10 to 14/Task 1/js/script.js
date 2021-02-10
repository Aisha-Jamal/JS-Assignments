var firstNumber = parseInt(prompt("Enter the first number"));
var secondNumber = parseInt(prompt("Enter the second number"));
var operation = prompt("Enter the operation you want to perform for example +, -, *, / or %");



if (operation == "+") {
    addition = parseFloat(firstNumber) + parseFloat(secondNumber);
    alert(`${firstNumber} ${operation} ${secondNumber} is ${addition}`);
} else if (operation == "-") {
    subtraction = parseFloat(firstNumber) - parseFloat(secondNumber);
    alert(`${firstNumber} ${operation} ${secondNumber} is ${subtraction}`);
} else if (operation == "*") {
    multiplication = parseFloat(firstNumber) * parseFloat(secondNumber);
    alert(`${firstNumber} ${operation} ${secondNumber} is ${multiplication}`);
} else if (operation == "/") {
    division = parseFloat(firstNumber) / parseFloat(secondNumber);
    alert(`${firstNumber} ${operation} ${secondNumber} is ${division}`);
} else if (operation == "%") {
    modulus = parseFloat(firstNumber) % parseFloat(secondNumber);
    alert(`${firstNumber} ${operation} ${secondNumber} is ${modulus}`);
} else {
    alert(`Enter correct operation`);
}