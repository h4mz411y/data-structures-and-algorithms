
'use strict';
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {


  let pivot = arr[high];

  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {


    if (arr[j] < pivot) {

      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}
function quickSort(arr, low, high) {
  if (low < high) {

    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

let arr = [8, 4, 23, 42, 16, 15];
quickSort(arr, 0, arr.length - 1);
console.log(arr);


let array1 = [20, 18, 12, 8, 5, -2];
quickSort(array1, 0, array1.length - 1);
console.log(array1);



let array2 = [5, 12, 7, 5, 5, 7];
quickSort(array2, 0, array2.length - 1);
console.log(array2);



let array3 = [2, 3, 5, 7, 13, 11];
quickSort(array3, 0, array3.length - 1);
console.log(array3);



module.exports = quickSort;
