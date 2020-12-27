"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    const percentRate = percent / 100;
    const credit = amount - contribution;
    const months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    const monthPayment = credit * (percentRate / 12 + percentRate / (12 * (((1 + percentRate / 12) ** months) - 1)));
    const totalAmount = months * monthPayment;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    const greeting = 'Привет, мир! Меня зовут';
    if (name === '' || name === null || name === undefined) {
        console.log(`${greeting} Аноним.`);
        return (`${greeting} Аноним.`);
    } else {
        console.log(`${greeting} ${name}.`);
        return (`${greeting} ${name}.`);
    }

    // return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
    // return greeting;
}