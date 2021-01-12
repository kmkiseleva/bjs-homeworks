"use strict";

String.prototype.isPalindrome = function() {
    let normalized = this.toLowerCase().replaceAll(" ", "");
    let strRev = normalized.split('').reverse().join('').replaceAll(" ", "");
    console.log(strRev);
    console.log(normalized);

    return strRev === normalized;
}

function getAverageMark(marks) {
    let amount = marks.length;
    let sum = 0;
    let average, roundedAverage;

    if (amount === 0) {
        return 0;
    }

    for (let i = 0; i < amount; i++) {
        sum += marks[i];
    }

    average = sum / amount;
    roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let date = new Date(birthday);
    birthday = +date;
    let age = (now - birthday) / 31536000000;
    return age >= 18;
}