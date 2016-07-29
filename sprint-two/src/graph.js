

// Instantiate a new graph
var Graph = function() {
  this.points = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var point = {};
  point.edge = {};
  point.node = node;
  this.points[node] = point;


};

// Return a boolean value indicating if the value passed to contains is represented in
// the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.points) {
    if (this.points[node].node === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.points) {
    if (this.points[key].edge.hasOwnProperty(node)) {
      delete this.points[key].edge[node];
    }
  }
  if ( this.points[node].node === node) {
    delete this.points[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.points[fromNode].edge.hasOwnProperty(toNode) && this.points[toNode].edge.hasOwnProperty(fromNode)) {
    return true;
  } 
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.points[fromNode].edge[toNode] = toNode;
  this.points[toNode].edge[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //Check if both nodes have an edge between them
  delete this.points[fromNode].edge[toNode];
  delete this.points[toNode].edge[fromNode];
  //remove edge from both nodes
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.points) {
    cb(this.points[key].node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


