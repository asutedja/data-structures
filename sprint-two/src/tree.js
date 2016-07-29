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
  var tree = Tree(value);
  tree.value = value;
  this.children.push(tree);


   // fix me
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i]; 
    if (child.contains(target)) {
      return true;
    }
  }
  

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
