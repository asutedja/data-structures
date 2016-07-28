var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  extend(newQueue, queueMethods);
  return newQueue;

};

var queueMethods = {};


var extend = function(to, here) {
  for (var key in here) {
    to[key] = here[key];
  }
};


queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};


queueMethods.dequeue = function() {
  var first = this[0];
  delete this[0];
  for (var key in this) {
    var newKey = key - 1;
    if (newKey !== NaN) {
      this[newKey] = this[key];
    }
  }
  this.length--;
  if (this.length < 0) {
    this.length = 0;
  }
  
  return first;
};
