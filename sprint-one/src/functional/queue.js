var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    //iterate through storage and decrease each key by 1;
    delete storage[0];
    for (var key in storage) {
      var newKey = key - 1;
      storage[newKey] = storage[key];
    }
    size--;
    if (size < 0) {
      size = 0;
    }
    return first;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
