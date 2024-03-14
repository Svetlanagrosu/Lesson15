
const time = 15000

const week = 10080
const day = 1440

const timeFormat = (remainingTime) => {
   if(remainingTime/week >=1) {  
 const weekMark = Math.floor(remainigTime/week) !== 1 ? 'weeks' : 'week'
 const dayMark = (remainingTime%week)/day > 1 ? 'days' : 'day'
 return `${Math.floor(remainingTime/week)}${weekMark} ${Mathfloor((remainingTime%week)/day)}${dayMark}`  
   } 
}
console.log(timeFormat(time))



