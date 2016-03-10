/*
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].
*/


function isBalanced(string) {
  // loop through string and look for closing brackets for all the opening brackets
  // If it is any other closing bracket other than the last opening bracket then return false
  // if string[x] is an opening bracket... keep track of them somehow
  // make sure they have a closing bracket
  var  brackets = [];
  for(var x = 0; x < string.length; x++){
    // console.log(string[x]);
    if(string[x] === '[' || string[x] === '(' || string[x] === '{'){
      brackets.push(string[x]);
    }
    if(string[x] === ']' || string[x] === ')' || string[x] === '}'){
      if(string[x] === ']'){
        if(brackets[brackets.length-1] !== '['){
          return false;
        }
        brackets.splice(-1,1);
        // brackets.pop()
      }
      if(string[x] === ')'){
        if(brackets[brackets.length-1] !== '('){
          return false;
        }
        brackets.splice(-1,1);
        // brackets.pop()
      }
      if(string[x] === '}'){
        if(brackets[brackets.length-1] !== '{'){
          return false;
        }
        brackets.splice(-1,1);
        // brackets.pop();
      }
    }
  }
  if(brackets.length){
    return false;
  }
  return true;
};

// console.log(isBalanced("(x + y) - (4)"), " Should equal:"  , true);
// console.log(isBalanced("[{()}]"), ' Should equal: ', true);
console.log(isBalanced("(50)("), " Should equal: ", false);
// console.log(isBalanced("({})"), ' Should equal: ', true);
// console.log(isBalanced("({)}"), ' Should equal: ', false);


