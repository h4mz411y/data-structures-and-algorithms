"use strict";
const BinaryTree = require('./binary-tree');
const Node = require('./node');
class BinarySearchTree extends BinaryTree {



  add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    else {
      let current = this.root;
      while (current) {
        if (value === current.value) return undefined;
        if (value < current.value) {

          if (current.left === null) {
            current.left = newNode;

          } else {
            current = current.left;
          }

        } else if (value > current.value) {

          if (current.right === null) {
            current.right = newNode;

          } else {
            current = current.right;
          }

        }
      }
    }
  }

  contains(value) {
    let found = false;
    let current = this.root;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;


      } else {
        found = true;
      }
    }
    return found;
  }

}

module.exports = BinarySearchTree;
