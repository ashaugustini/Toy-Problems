/*
Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.
*/

function sumArray (array) {

 var maxSum = array[0];

 for (var x = 0; x < array.length; x++){
     var currentSum = 0;
     for (var i = x; i < array.length; i++){
      currentSum += array[i];

     if (currentSum > maxSum){
       maxSum = currentSum;
      }
     }
 }
 return maxSum;
}
