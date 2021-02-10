var username = prompt("Enter your name");
var date = prompt("Enter your date of birth");
var month = prompt("Enter your birth month");
var year = prompt("Enter your birth year");

var time = new Date().getHours();
var message = "";
if (time > 0 && time < 12) {
    message = "Good Morning";
}
if (time > 12 && time < 16) {
    message = "Good Afternoon";
}
if (time > 16 && time < 20) {
    message = "Good Evening";
}
if (time > 20) {
    message = "Good Night";
}
console.log(`Hello ${username}, ${message} `);


var dateOfBirth = new Date(year, month - 1, date);
console.log(`Your DOB is ${dateOfBirth}`);

var age = new Date() - dateOfBirth;
age = age / 1000;

var ageYears = Math.floor(age / 31536000);
var ageMonths = Math.floor((age % 31536000) / 2628000);
//23 Jan - today
var today = new Date();
var birthDate = new Date(dateOfBirth);
var tofindday = new Date();

tofindday.setMonth(today.getMonth() - 1);
tofindday.setDate(birthDate.getDate());
var days = today - tofindday;
ageDays = days / (1000 * 60 * 60 * 24);
// var ageDays = Math.floor((age % 31536000) / 86400);
var ageHours = Math.floor(((age % 31536000) % 86400) / 3600);
var ageMinutes = Math.floor((((age % 31536000) % 86400) % 3600) / 60);
var ageSeconds = (((age % 31536000) % 86400) % 3600) % 60;



console.log(`You are ${ageYears} years ${ageMonths} months ${ageDays} days ${ageHours} hours ${ageMinutes} minutes ${ageSeconds} seconds old`);
console.log(`Your Age in Days ${Math.floor(age / 86400)} `);
//How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam. Today is Your 20th Birthday
birthDate = new Date(today.getFullYear(), dateOfBirth.getMonth(), date);

var timeLeftInBirthday = birthDate - today;
alert(timeLeftInBirthday);
if (timeLeftInBirthday > 0) {
    console.log(Math.floor(timeLeftInBirthday / 86400000) + ' days ' + Math.floor(((timeLeftInBirthday % 31536000) % 86400) / 3600) + ' hours ' + Math.floor((((timeLeftInBirthday % 31536000) % 86400) % 3600) / 60) + ' minutes ' + (((timeLeftInBirthday % 31536000) % 86400) % 3600) % 60 + ' seconds  Left in your birthday');
} else {

    console.log(`Happy Birth Day ${username}. Today is Your ${ageYears+1} Birthday`);
}