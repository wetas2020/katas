/*
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
*/

const assert = require('assert');

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    }
    if (exam > 75 && projects >= 5) {
        return 90;
    }
    if (exam > 50 && projects >= 2) {
        return 75;
    }
    return 0;
}

console.log(finalGrade(100, 12) === 100);
console.log(finalGrade(85, 5) === 90);
console.log(finalGrade(55, 3) === 75);
console.log(finalGrade(55, 0) === 0);
console.log(finalGrade(20, 2) === 0);
console.log(finalGrade(0, 0) === 0);
console.log(finalGrade(100, 0) === 100);
console.log(finalGrade(0, 12) === 0);
console.log(finalGrade(100, 12) === 100);
