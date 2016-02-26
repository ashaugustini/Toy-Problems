/*
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
*/

function arrayception(array, depth, deepest) {
 if (deepest === undefined) {
  deepest = 0;
 }
 if (depth === undefined) {
  depth = 1;
 }
 if (!array.length) {
  return deepest;
 }
 for (var x = 0; x < array.length; x++) {
  if (!Array.isArray(array[x])) {
   if (depth > deepest) {
    deepest = depth;
   }
  } else {
   deepest = arrayception(array[x], depth + 1, deepest);
  }
 }
 return deepest;
}
