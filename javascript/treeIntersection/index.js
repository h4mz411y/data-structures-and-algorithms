'use strict';
const BinaryTree = require('./binary-tree');
const Node = require('./node')

function tree_intersection(tree1, tree2) {
    let arr1 = tree1.preOrder();
    let arr2 = tree2.preOrder();

    let commonValues = [];
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonValues[k] = arr2[j];
                k++;   }}}
    if (commonValues.length) {
        return commonValues;
    }else {
        return 'No common values'
    }}
module.exports = tree_intersection;
