"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentRate = percent / 100;
    let credit = amount - contribution;
    let months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    let monthPayment = credit * (percentRate / 12 + percentRate / (12 * (((1 + percentRate / 12) ** months) - 1)));
    let totalAmount = months * monthPayment;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    if (name === '') {
        console.log(`Привет, мир! Меня зовут Аноним.`);
        return (`Привет, мир! Меня зовут Аноним.`);
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return (`Привет, мир! Меня зовут ${name}.`);
    }
    // return greeting;
}