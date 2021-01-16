"use strict";
console.log("Задача 1");

function parseCount(value) {
   let result = Number.parseInt(value);
   if (result === NaN) {
      const error = new Error("Невалидное значение");
      throw error;
   }
   return result;
}

function validateCount(value) {
   parseCount(value);
}