'use strict';
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    breadthFirst() {
        if (this.root == null)
        return "The tree is empty";
        let visited = [];
        let queue = [];
        let currentNode = this.root;
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            visited.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);

        };
        return visited;
    }
}
module.exports = BinaryTree;
