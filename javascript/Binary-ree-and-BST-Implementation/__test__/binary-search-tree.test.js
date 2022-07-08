
'use strict';
const BinarySearchTree = require('../binary-tree-search');
const Node = require('../node');


describe("Binary SearchTree", () => {
        beforeAll(() => {
            let binarySearchTree = new BinarySearchTree();
            binarySearchTree.add(5000);
            binarySearchTree.add(800);
            binarySearchTree.add(600);
            binarySearchTree.add(7000);
            binarySearchTree.add(3000);
            binarySearchTree.add(9000);

          });

          it("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
            const binarySearchTree = new BinarySearchTree();
            binarySearchTree.add(5000);
            binarySearchTree.add(9000);
            binarySearchTree.add(3000);

            expect(binarySearchTree.root.value).toEqual(5000);
            expect(binarySearchTree.root.left.value).toEqual(3000);
            expect(binarySearchTree.root.right.value).toEqual(9000);
          });
          test("Can successfully return a correct boolean when check the BST contain the value or not", () => {
            let binarySearchTree = new BinarySearchTree();
            binarySearchTree.add(5000);
            binarySearchTree.add(800);
            binarySearchTree.add(600);
            binarySearchTree.add(7000);
            binarySearchTree.add(3000);
            binarySearchTree.add(9000);

            expect(binarySearchTree.contains(5000)).toEqual(true);
            expect(binarySearchTree.contains(800)).toEqual(true);
            expect(binarySearchTree.contains(5)).toEqual(false);
            expect(binarySearchTree.contains(3)).toEqual(false);
          });




})





