// Given a number convert it to a phone number.

phoneNumber = function(string){
  var result = '';

  for(var i=0; i < string.length; i = i+3){
    if(string.length - i === 4){
      result += string.slice(i,i+2) + '-' + string.slice(i+2,i+4);
      break;
    }else{
      result += string.slice(i,i+3) + '-';
    }
  }
  if(result[result.length-1] === '-'){
    result = result.slice(0,result.length-1);
  }
  return result;
};
