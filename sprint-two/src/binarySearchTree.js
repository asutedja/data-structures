var BinarySearchTree = function(value) {

  var trees = newTree(value);

//logarithmic
  trees.insert = function(value) {
    var tree = newTree(value);
    var sort = function(node, val) {
      if (val < node.value) {
        if (node.left === null) {
          node.left = tree;
        } else {
          sort(node.left, val);
        }
      } else if (val > node.value) {
        if (node.right === null) {
          node.right = tree;
        } else {
          sort(node.right, val);
        }
      }
    };
    sort(trees, tree.value);


  };

//logarithmic
  trees.contains = function(value) {

    var find = function(node, val) {
      if (node.value === val) {
        return true;
      }
      if (val < node.value) {
        if (node.left === null) {
          return false;
        } else {
          return find(node.left, val);
        }
      } else if (val > node.value) {
        if (node.right === null) {
          return false;
        } else {
          return find(node.right, val);
        }
      }
    };
    return find(trees, value);



  };

//logarithmic
  trees.depthFirstLog = function(cb) {
    var values = [];
    var run = function(node) {
      cb(node.value);
      if (node.left !== null && node.right !== null) {
        run(node.left);
        run(node.right);
      }
      if (node.left !== null) {
        run(node.left);
      }
      if (node.right !== null ) {
        run(node.right);
      }



    };
    run(trees);
  };

  return trees;
};

var newTree = function(value) {
  var tree = {};
  tree.right = null;
  tree.left = null;
  tree.value = value;
  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





