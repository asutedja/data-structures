var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;

};


Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};


Queue.prototype.dequeue = function() {
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


