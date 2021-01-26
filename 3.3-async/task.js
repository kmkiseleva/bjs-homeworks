"use strict";
console.log("Задача 1");

class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = id;
   }

   addClock(time,callback,id) {
      if (!id) {
         throw new Error('error text');
      }

      this.alarmCollection.push({
         time,
         callback,
         id
      });
   }

   removeClock(id) {
      
   }

   getCurrentFormattedTime() {

   }

   start() {

   }

   stop() {

   }

   printAlarms() {

   }

   clearAlarms() {
      
   }
}