/*
Implement the functions compose and pipe.
*/

var compose = function(){
  var args = arguments
  return function(value){
    for(var x=args.length -1; x >= 0; x--){
      value = args[x](value)
    }
    return value
  }
};

var pipe = function(){
  var args = arguments
  return function(value){
    for(var x =0; x < args.length; x++){
      value = args[x](value)
    }
    return value
  }
};
