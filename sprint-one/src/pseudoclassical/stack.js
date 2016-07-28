var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};


var stackMethods = {};

Stack.prototype.push = function(value) {
  //Adding value to the back of stack
  this[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
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

Stack.prototype.size = function() {
  return this.length;
};




