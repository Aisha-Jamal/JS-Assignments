function factorial(len) {
    var result = 1;

    for (var i = len; i > 1; i--) {
        result = result * len;
        len--;
    }
    return result;
}
var inputValue = Number(prompt("Enter any value"));
console.log(factorial(inputValue));