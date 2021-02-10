var english = prompt("Enter marks obtained in english");
if (english <= 100) {
    console.log(`Correct marks`);
} else {
    english = prompt("Enter english marks again it should be equal to or less than 100");
}
var maths = prompt("Enter marks obtained in maths");
if (maths <= 100) {
    console.log(`Correct marks`);
} else {
    maths = prompt("Enter maths marks again it should be equal to or less than 100");
}

var science = prompt("Enter marks obtained in science");
if (science <= 100) {
    console.log(`Correct marks`);
} else {
    science = prompt("Enter science marks again it should be equal to or less than 100");
}

var computer = prompt("Enter marks obtained in computer");
if (computer <= 100) {
    console.log(`Correct marks`);
} else {
    computer = prompt("Enter computer marks again it should be equal to or less than 100");
}

var urdu = prompt("Enter marks obtained in urdu");
if (urdu <= 100) {
    console.log(`Correct marks`);
} else {
    urdu = prompt("Enter urdu marks again it should be equal to or less than 100");
}

var marksObtained = parseFloat(english) + parseFloat(maths) + parseFloat(science) + parseFloat(computer) + parseFloat(urdu);
alert(`Total marks obtained: ${marksObtained}`)
var marks = 500;
var per = (marksObtained / marks) * 100;
var percentage = per.toFixed(2);
document.getElementById("box").style = "border: 2px solid blue; width: 300px; padding: 50px; margin: 20px";
alert(`Total marks: ${marks}  Marks obtained: ${marksObtained}  Percentage: ${percentage}%`);
document.write(`Total marks: ${marks}<br /> Marks obtained: ${marksObtained}<br /> Percentage: ${percentage}%`);