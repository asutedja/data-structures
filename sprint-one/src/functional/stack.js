var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    //Take the last key value pair from storage 
    var last = storage[size - 1];
    //Remove last key value pair from storage
    delete storage[size - 1];
    //Decrease size
    size--;
    if (size < 0) {
      size = 0;
    }

    //Return removed key value pair
    return last;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
