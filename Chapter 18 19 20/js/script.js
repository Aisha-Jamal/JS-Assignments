var courses = [];

for (var i = 1; i < 6; i++) {
    courses.push(prompt(`Enter course${i}`));
}
alert(courses);

for (var i = 1; i < 6; i++) {

    var promptEditValue = prompt(`Old value of course${i} is ${courses[i-1]}, If you want to change enter the new value`);
    if (promptEditValue > 0) {
        courses.splice(i - 1, 1, promptEditValue);
    }
}

alert(courses);