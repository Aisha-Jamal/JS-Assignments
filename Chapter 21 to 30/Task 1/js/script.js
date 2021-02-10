var number = parseFloat(prompt("Enter any number"));
var roundUpNumber = Math.ceil(number);
document.write(`ceil value: ${roundUpNumber}`);


var text = "This is my dummy text";
// document.write(`<br/>${text}`);
var temp = text.slice(0, roundUpNumber);
var reverse = "";

for (var i = temp.length - 1; i >= 0; i--) {
    reverse += temp[i];
}

alert(reverse);