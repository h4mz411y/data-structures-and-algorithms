'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {


      if (node.left) traverse(node.left);
      result.push(node.value);

      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return result;
  }

  postOrder() {
    let result = [];
    let traverse = (node) => {


      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root)
    return result;
  }
  findMax() {
    if (this.root === null) {
      return "The tree is empty";
    }
    let max = this.root.value;
    let traverse = (node) => {

      if (node.left != null) {
        if (node.left.value > max) {
          max = node.left.value;
          traverse(node.left);
        }
      }
      if (node.right != null) {
        if (node.right.value > max)

          max = node.right.value;
        traverse(node.right);
      }
    }
    traverse(this.root);
    return max;

  }
}
module.exports = BinaryTree;
