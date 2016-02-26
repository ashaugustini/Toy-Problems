/*
Given an input array where the value at each index is the height of towers, calculate how much water will accumulate in between tower walls.
*/

var arr = [1, 2, 4, 1, 2, 3];

function getWater(tower) {
 var water = 0;
 var left = 0;

 for (var x = 1; x < tower.length; x++) {
  if (tower[x] > tower[x + 1] || x === tower.length - 1) {
   var right = x;
   var shorter;
   if (tower[left] < tower[right]) {
    shorter = tower[left];
   } else {
    shorter = tower[right];
   }
   for (var i = left + 1; i < right; i++) {
    if (shorter - tower[i] > 0) {
     water += shorter - tower[i]
    }
   }
   left = right;

  }
 }
 return water
}
console.log(getWater(arr));

