/*
Implement the function 'bind'
*/

var bind = function(func, context) {
 var results = Array.prototype.slice.call(arguments, 2)
 return function() {
  var args = Array.prototype.slice.call(arguments);
  var cat = results.concat(args)
  return func.apply(context, cat)
 };
};

Function.prototype.bind = function(context) {
 var args = Array.prototype.slice.call(arguments);
 var cat = [this]
 var mouse = cat.concat(args)
 return bind.apply(null, mouse);
};
