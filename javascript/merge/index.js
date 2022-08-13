'use strict';

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.slice(0, middle);
  const middle = Math.floor(arr.length / 2);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}


module.exports = mergeSort;
