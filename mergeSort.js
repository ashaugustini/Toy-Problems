/*
Implement a function that sorts an array of numbers using the “mergesort” algorithm.
*/

function mergeSort(arr){
  if(arr.length === 1){
    return arr;
  }

  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){

  var result = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length){
    result.push(left.shift());
  }

  while(right.length){
    result.push(right.shift());
  }
  return result;
}

// mergeSort([3,6,7,9,2,1,6,7,4]);
// console.log(mergeSort([3,6,7,9,2,1,6,7,4]));
