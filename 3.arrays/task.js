//Задача 1
function compareArrays(arr1, arr2) {
  let result;
  result = arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);
  
  return result; // boolean
}


//задача 2
function advancedFilter(arr) {
  let resultArr;
  let positiveNumbers = arr.filter(item => item > 0 && item % 3 === 0);
  
  resultArr = positiveNumbers.map(item => item * 10);
  
  return resultArr;
}
