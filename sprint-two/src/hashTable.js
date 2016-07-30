

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// constant/linear time
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var overwrite = true;
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = [k, v];
        overwrite = false;
      }     
    }
    if (overwrite) {
      bucket.push([k, v]);  
    }
    this._storage.set(index, bucket);
  }
};

//linear/constant time
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

//linear and constant time XD
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];


  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1); //This deletes the exaxt tuple over deleting the entire bucket as shown in the line below.
      //this._storage.set(index, undefined);
    }
  }

  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


