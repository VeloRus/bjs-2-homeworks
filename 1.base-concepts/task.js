"use strict"

function solveEquation (a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1, x2;
  
  if (d < 0) {
      
  } else if (d == 0) {
     x1 = -b / (2 * a);
     arr[0] = x1
        
  } else if (d > 0) {

    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    arr[0] = x1;
    arr[1] = x2;
  }
  return(arr);
}




//Задача 2
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }
  if (isNaN(amount)) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
 
let S =  amount - contribution;

let nowDate = new Date();
let currentYear = nowDate.getFullYear();
let endYear = date.getFullYear();
let currentMonth = nowDate.getMonth();
let endMonth = date.getMonth();

 if (currentMonth === 0) {
    currentMonth++;
    endMonth++;
  }
let n = (endYear - currentYear) * 12 + (endMonth - currentMonth);
let P = percent / 100 / 12;

let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));

  totalAmount = monthlyPayment * n;
  totalAmount = Number(totalAmount.toFixed(2));

   return(totalAmount);
}