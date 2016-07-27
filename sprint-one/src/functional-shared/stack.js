var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var storageLength = 0;

  var size = function() {
    return storageLength;
  };

  var push = function(value) {
    storage[storageLength] = value;
    storageLength++;
  };

  var pop = function() {
    var last = storage[storageLength - 1];
    delete storage[storageLength - 1];
    storageLength--;
    if (storageLength < 0) {
      storageLength = 0;
    }
    return last;

  };

  stackMethods['size'] = size;
  stackMethods['push'] = push;
  stackMethods['pop'] = pop;
  return stackMethods;
};

var stackMethods = {};


var test = Stack();


