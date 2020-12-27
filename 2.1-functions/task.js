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

// задача 2

// function getAverageScore(data) {
//    let data = {
//       algebra: [],
//       geometry: [],
//       russian: [],
//       physics: [],
//       music: [],
//       english: [],
//       poetry: [],
//       chemistry: [],
//       french: []
//    }
// }

// function getAverageMark(...marks) {
//       let sum = 0;
//       for (let i = 0; i < marks.length; i++) {
//       sum += marks[i];
//       }
//       return sum / marks.length;
//       }
//       console.log(getAverageMark(2, 4, 5));