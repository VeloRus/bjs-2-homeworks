//Задача 1
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

  return totalAmount;
}
