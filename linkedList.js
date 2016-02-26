/*
Implement a linked-list.
*/

var LinkedList = function (initialValue) {
  if(!initialValue){
    this.head = null
    this.tail = null
    return;
  }
  this.tail = createNode(initialValue);
  this.head = this.tail;
};

LinkedList.prototype.addToTail = function(value){
  var temp = createNode(value)
  if(this.tail === null){
    this.tail = temp
    this.head = temp
  }
  else{
    this.tail.next = temp;
    this.tail = temp;
  }
}

LinkedList.prototype.removeHead = function(){
  if(this.head === this.tail){
    this.head = null
    this.tail = null
  }else{
  this.head = this.head.next;
  }
}

LinkedList.prototype.contains = function(value, node){
  if(node === undefined){
    node = this.head;
  }
  if(node.value === value){
    return true;
  }
  if(!node.next){
    return false;
  }
  return this.contains(value, node.next)

}

function createNode(value){
  return {value: value, next: null};
};
