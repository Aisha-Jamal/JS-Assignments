var courses = [];
var course1 = prompt(`Enter course1`);
courses.push(course1);
var course2 = prompt(`Enter course2`);
courses.push(course2);
var course3 = prompt(`Enter course3`);
courses.push(course3);
var course4 = prompt(`Enter course4`);
courses.push(course4);
var course5 = prompt(`Enter course5`);
courses.push(course5);
alert(courses);
course1 = prompt(`Old value of course1 is ${courses[0]}, If you want to change enter the new value`);
if (course1 > 0) {
    courses.splice(0, 1, course1);
}
course2 = prompt(`Old value of course2 is ${courses[1]}, If you want to change enter the new value`);
if (course2 > 0) {
    courses.splice(1, 1, course2);
}
course3 = prompt(`Old value of course3 is ${courses[2]}, If you want to change enter the new value`);
if (course3 > 0) {
    courses.splice(2, 1, course3);
}
course4 = prompt(`Old value of course4 is ${courses[3]}, If you want to change enter the new value`);
if (course4 > 0) {
    courses.splice(3, 1, course4);
}
course5 = prompt(`Old value of course5 is ${courses[4]}, If you want to change enter the new value`);
if (course5 > 0) {
    courses.splice(4, 1, course5);
}
alert(courses);