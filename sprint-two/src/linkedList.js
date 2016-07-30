var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

//constant
  list.addToTail = function(value) {
    
    var node = Node(value);
    if (list.tail === null) {
      if (list.head === null) {
        list.head = node; 
        list.tail = node; 
      } else {
        list.tail.next = node;
        list.tail = node;
      }
    } else if (list.head.next === null) {
      list.tail = node;
      list.head.next = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

//constant
  list.removeHead = function() {
    //Find out where the head it at
    var temp = list.head.next;
    var result = list.head.value;
    list.head.value = null;
    list.head.next = null;
    list.head = temp;
    return result;
    //Find the next node after current head
    //Assign the next node to be the head
    //Delete the former head


  };

//linear
  list.contains = function(target) {
    
    var check = list.head;
    var result = false;
    while ( check.next !== null && result === false) {
      if (check.value === target) {
        result = true;
      } else {
        check = check.next;
      }
    }
    if (list.tail.value === target) {
      result = true;
    }
    return result;
    //Check each node value for target
      //Check head first
      //Check head.next
      //Check until you find it or hit null

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
