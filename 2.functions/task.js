// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  
    min = -Infinity;
    max = Infinity;
    sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      
      min = Math.min(...arr)
      max = Math.max(...arr)
      
      sum += arr[i];    
      let interm = sum / arr.length;
      avg = +interm.toFixed(2);
    }
    
  
    return{ min: min, max: max, avg: avg };
  }
  
  
// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let dif = Math.max(...arr) - Math.min(...arr);
  let module = Math.abs(dif);

  return module;
}
