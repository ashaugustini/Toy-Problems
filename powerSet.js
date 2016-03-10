/*
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.
*/

function powerSet (string) {
var power = [[]];
var obj = {};
var arr = [];

for(var x= 0; x < string.length; x++){
    obj[string[x]] = true;
}
for(var k in obj){
    arr.push(k);
}
string = arr.sort().join("");
for(var i=0; i<string.length; i++){
  for (var j=0, leng = power.length; j < leng; j++){
    power.push(power[j].concat(string[i]));

  }
}
var map = power.map(function(e, i, c){
    return e.join("");
})
return map.sort();
}
