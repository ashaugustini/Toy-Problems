/*
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

NOTICE: Newline characters in the inputs have been replaced with <br /> tags.
*/

function countIslands (mapStr) {
  var row = mapStr.indexOf('\n')+1;
  mapStr = mapStr.split('');
  var count = 0;
  for(var x = 0; x < mapStr.length; x++){

    if(mapStr[x] === '0'){
      count++;
      search(x);
    }
  }
  function search(x){
    if(mapStr[x] === '0'){
      mapStr[x] = '.';
      //check right
      search(x + 1)
      //check left
      search(x - 1)
      //check top
      search(x - row)
      //check bottom
      search(x + row)
    }
  }
  return count;
}
