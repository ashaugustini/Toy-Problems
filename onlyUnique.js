/*
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique (string) {
  var storage = {};
  for(var x = 0; x < string.length; x++){
    if(!storage[string[x]]){
      storage[string[x]] = 1;
    }
    else{
      storage[string[x]]++;
    }
  }
  var result = ''
  for(var key in storage){
    if(storage[key] === 1){
     result += key
    }
  }
  return result;
};
