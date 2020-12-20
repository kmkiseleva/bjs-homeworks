"use strict";
function getResult(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let x = [];
    if (d < 0) {
        console.log('корней нет');
        return x;
    } else if (d === 0) {
        console.log('один корень');
        x = [-b / 2 * a];
        return x;
    } else if (d > 0) {
        console.log('два корня');
        x = [(-b + d ** (1 / 2)) / 2 * a, (-b - d ** (1 / 2)) / 2 * a];
        return x;
    }
}

function getAverageMark(marks) {
    let amount = marks.length;
    let sum = 0;
    let averageMark;

    if (amount === 0) {
        console.log('количество оценок: ' + amount);
        console.log('сумма оценок: ' + sum);
        return 0;
    }
    else if (amount > 5) {
        console.log('количество оценок больше пяти');
        marks = marks.slice(0, 5);
        for (let i = 0; i < 5; i++) {
            sum += marks[i];
        }
        averageMark = sum / 5;
        console.log('количество оценок: ' + amount);
        console.log('сумма первых пяти оценок: ' + sum);
        console.log('средняя оценка: ' + averageMark);
        return averageMark;
    } else {
        for (let i = 0; i < amount; i++) {
            sum += marks[i];
        }
        averageMark = sum / amount;
        console.log('количество оценок: ' + amount);
        console.log('сумма оценок: ' + sum);
        console.log('средняя оценка: ' + averageMark);
        return averageMark;
    }
}

function askDrink(name, dateOfBirthday) {
    let today = new Date();
    let year = today.getFullYear();
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let result = year - yearOfBirthday;
    console.log(today);
    console.log(year);
    console.log(yearOfBirthday);
    if (result > 18) {
        alert('Не желаете ли олд-фэшн, ' + name + '?');
        return result;
    } else if (result < 18) {
        alert('Сожалею, ' + name + ',но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!');
        return result;
    }
}