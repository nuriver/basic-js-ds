const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.radix = null;
  }

  root() {
    return whatRoot(this.radix);
    function whatRoot(node) {
      if (!node) {
        return null;
      } else {
        return node;
      }
    }
  }

  add(data) {
    this.radix = addData(this.radix, data);

    function addData(node, data) {
      if (node == null) {
        return new Node(data);
      }

      if (node.data == data) {
        return node;
      }

      if (node.data > data) {
        node.left = addData(node.left, data);
      }

      if (node.data < data) {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.radix, data);
    function hasData(node, data) {
      if (!node) {
        return false;
      } else if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.radix, data);
    function findData(node, data) {
      if (!node) {
        return null;
      } else if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    
    this.radix = dataRemove(this.radix, data);

    function dataRemove(node, data) {
      if (!node) {
        return null;
      }
      
      if (data < node.data) {
        node.left = dataRemove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = dataRemove(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }
        
        if (!node.left) {
          node = node.right;
          return node;
        }
        
        if (!node.right) {
          node = node.left;
          return node;
        }

        let rightNodeMin = node.right;
        while (rightNodeMin.left) {
          rightNodeMin = rightNodeMin.left;
        }
        node.data = rightNodeMin.data;
         
        node.right = dataRemove(node.right, rightNodeMin.data);
        return node;
      }
    }
  }

  min() {
    return findMin(this.radix);
    function findMin(node) {
      if (!node) {
        return null;
      } else if (node.left) {
        return findMin(node.left)
      } else {
        return node.data;
      }
    }

  }

  max() {
    return findMin(this.radix);
    function findMin(node) {
      if (!node) {
        return null;
      } else if (node.right) {
        return findMin(node.right)
      } else {
        return node.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};