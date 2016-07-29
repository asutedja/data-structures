var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

//constant time
setPrototype.add = function(item) {
  this._storage[item] = item;

};

//linear time
setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (this._storage[item] === item) {
      return true;
    }
  }
  return false;
};

//constant time
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
