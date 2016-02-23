/*
Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.
*/

Array.prototype.isSubsetOf = function(array) {

 for (var x = 0; x < this.length; x++) {
  if (array.indexOf(this[x]) === -1) {
   return false;
  }
 }
 return true;
};
