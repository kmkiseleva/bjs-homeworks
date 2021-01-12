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
    console.log(now);
    // let Date = dateOfBirthday.getFullYear();
    // let birthday = +Date;
    // let diff = birthday - now;
    // let age = diff / 31 536 000 000;
    // if (age >= 18) {
    //     return true
    // } else {
    //     false
    // }

    // return verdict
}

checkBirthday();