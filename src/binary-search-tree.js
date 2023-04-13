const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
      return this.rootNode;
  }

  add(value) {
      this.rootNode = addNode(this.rootNode, value);

      function addNode(node, value) {
          if (!node) return new Node(value);

          if (node.data == value) return node;

          value < node.data 
              ? node.left = addNode(node.left, value) 
              : node.right = addNode(node.right, value)

          return node;
      }
  }

  has(value) {
    return searchValue(this.rootNode, value);

    function searchValue(node, value) {
        if (!node) return false;
        if (node.data == value) return true;
        return (value < node.data) ? searchValue(node.left, value) : searchValue(node.right, value);
    }
}

find(value) {
  return searchValue(this.rootNode, value);

  function searchValue(node, value) {
      if (!node) return null;
      if (node.data == value) return node;
      return (value < node.data) ? searchValue(node.left, value) : searchValue(node.right, value)
  }
}

  remove(value) {
    this.rootNode = removeNode(this.rootNode, value);

    function removeNode(node, value) {
        if (!node) return null;

        if (value < node.data) {
            node.left = removeNode(node.left, value);
            return node;
        } else if (value > node.data) {
            node.right = removeNode(node.right, value);
            return node;
        } else {
            if (!node.left && !node.right) {
                return null
            }

            if (!node.left) {
                node = node.right;
                return node;
            }

            if (!node.right) {
                node = node.left;
                return node;
            }

            let minR = node.right;

            while(minR.left) {
                minR = minR.left;
            }

            node.data = minR.data;
            node.right = removeNode(node.right, minR.data);

            return node;
        }
    }
}

  min() {
    return getMin(this.rootNode);

    function getMin(node) {
      return node.left ? getMin(node.left) : node.data;
    }
  }

  max() {
    return getMax(this.rootNode);

    function getMax(node) {
      return node.right ? getMax(node.right) : node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};
