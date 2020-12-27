"use strict";

// Задача 1
function getSolutions(a, b, c) {
   let d = b ** 2 - 4 * a * c;
   let x0 = -b / (2 * a);
   let x1 = (-b + d ** (1 / 2)) / (2 * a);
   let x2 = (-b - d ** (1 / 2)) / (2 * a);
    if (d < 0) {
      return {
         D: d,
         roots: []
      };
    } else if (d === 0) {
       return {
          D: d,
          roots: [x0]
       };
    } else if (d > 0) {
       return {
          D: d,
          roots: [x1, x2]
       };
    }
}

function showSolutionsMessage(a, b, c) {
   let result = getSolutions(a, b, c);
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}\n`);
   if (result.D < 0) {
      console.log('Уравнение не имеет вещественных корней');
   } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
   } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
   }
}

showSolutionsMessage(7, 20, -3);

// Задача 2

// function getAverageScore(data) {
//    let data = {

//    }

// }

// function getAverageMark(marks) {

// }

// // Задача 3

// function getPersonData(secretData) {

// }

// function getDecodedValue(secret) {

// }