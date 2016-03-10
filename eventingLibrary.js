/*
Make an eventing system mix-in that adds .trigger() and .on() to any input object.
*/

var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function(event, arg1, arg2) {
    var args = Array.prototype.splice.call(arguments, 1);
    if(events[event] === undefined){
      return;
    }
    for(var i = 0; i < events[event].length; i++){
      events[event][i].apply(null, args);
    }
  };

  obj.on = function(event, callback) {
    if(events[event] === undefined){
      events[event] = [];
    }
    events[event].push(callback);
  };
  return obj;
};
