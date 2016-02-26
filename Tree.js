/*
Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

Help this person finish their tree by adding in the missing code for these methods.
*/

var treeMaker = function(value) {
 var newTree = Object.create(treeMaker.methods);
 newTree.value = value;
 newTree.children = [];
 return newTree;
};
treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
 var node = treeMaker(value);
 this.children.push(node)
}

treeMaker.methods.contains = function(value) {
 var result = false;

 var search = function(value, node) {
  if (node.value === value) {
   result = true;
  }
  for (var x = 0; x < node.children.length; x++) {
   search(value, node.children[x])
  }
 }
 search(value, this)
 return result;
};
