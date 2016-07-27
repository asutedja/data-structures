var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var length = 0;

  var enqueue = function(value) {
    storage[length] = value;
    length++;
  };
  var dequeue = function() {
    var first = storage[0];
    delete storage[0];

    for (var key in storage) {
      var newKey = key - 1;
      storage[newKey] = storage[key];
    }

    length--;
    
    if (length < 0) {
      length = 0;
    }
    
    return first;
  };
  var size = function() {
    return length; 
  };
  queueMethods['enqueue'] = enqueue;
  queueMethods['dequeue'] = dequeue;
  queueMethods['size'] = size;
  return queueMethods;
};

var queueMethods = {};


