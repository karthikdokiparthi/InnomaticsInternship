function calculateGrade(marks, attendance) {
    if (attendance >= 90) {
        marks = marks + 5;
    }
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

let attendance = 70;
let marks = 87;
let calculate = calculateGrade(marks, attendance);
console.log('Your Grade:', calculate);