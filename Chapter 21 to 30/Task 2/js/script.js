var inputValue = prompt(`Enter the content`);

// alert(splitText[0][0]);
var words = inputValue.split(' ');

var results = [];
for (var i = 0; i < words.length; i++) {
    var letter = words[i].charAt(0).toUpperCase();
    results.push(letter + words[i].slice(1));
};

console.log(results.join(' '));