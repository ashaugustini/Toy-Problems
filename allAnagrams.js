/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
*/

function allAnagrams (string) {
  var weapons = string.split('');
  var results = [];

  function anagram(weapons, string){
    if(weapons.length === 0){
      //check if {{string}} is in {{results}}
      if(results.indexOf(string) === -1){
        results.push(string);
      }
      return;
    }
    for(var i = 0; i < weapons.length; i++){
      // place weapon in string
      var newString = string + weapons[i];
      // take weapon out of weapons
      var left = weapons.slice(0,i);
      var right = weapons.slice(i+1);
      var newWeapons = left.concat(right);
      anagram(newWeapons, newString);
    }
  }
  anagram(weapons, '');
  return results;

}
