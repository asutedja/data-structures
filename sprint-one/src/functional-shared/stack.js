var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.length = 0;
  extend(newStack, stackMethods);
  return newStack;


};

var extend = function(to, here) {
  for (var key in here) {
    to[key] = here[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  //Adding value to the back of stack
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  //Setting last to be last value of stack
  var last = this[this.length - 1];
  //Delete last value of stack
  delete this[this.length - 1];
  //Decreases stack length
  this.length--;
  //Ensures stack length doesn't go below 0
  if (this.length < 0) {
    this.length = 0;
  }
  //return last element;
  return last;



};

stackMethods.size = function() {
  return this.length;
};




