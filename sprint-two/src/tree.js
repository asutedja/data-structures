var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


var extend = function(to, here) {
  for (var key in here) {
    to[key] = here[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.value = value;
  this.children.push(this);

  console.log(this);
   // fix me
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length < 1) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]; 
      if (child.contains(target)) {
        console.log(this.value);
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
