'use strict';

function fizzBuzzTree(tree) {
    function fizzBuzzNew(value) {
        let valueToString;
        if (value % 5 === 0 && value % 3 === 0) {
            valueToString = 'FizzBuzz';
          } else if (value % 5 === 0) {
            valueToString = 'Buzz';
          } else if (value % 3 === 0) {
              valueToString = 'Fizz';
        } else {
            valueToString = value.toString();
        }
        return valueToString;
    }
    function recursive(tree) {
        let result = {};
        for (const key in tree) {
            const value = tree[key];
            if (value && typeof value === 'object') {
                result[key] = recursive(value);
            } else {
                result[key] = fizzBuzzNew(value);
            }
        }
        return result;
    }
    return recursive(tree);
}

module.exports = fizzBuzzTree;
