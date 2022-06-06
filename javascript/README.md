# Code Challenges

# Code challenge 01
 * [ Reversed-Array](https://github.com/h4mz411y/data-structures-and-algorithms/blob/main/javascript/code-challenges/ReversseArray/README.md)

# Code challenge 02
 * [ insertShiftArray](https://github.com/h4mz411y/data-structures-and-algorithms/tree/main/javascript/insertShiftArray)

# Code challenge 03
 * [Linked-list](https://github.com/h4mz411y/data-structures-and-algorithms/tree/main/javascript/linked-list)


```js
let bSearch = function(array,index){

  let startPointer = 0;
  let endPointer = arr.length-1;
  while(startPointer<=endPoninter){
    let medPointer=(startPointer + endPointer)/2;
    if (array[midPointer]< index){
     startPointer = midPointer +1
    }else if (array[midpointer] === array){
       return true;

    }else {
      endPointer = midPointer-1
    }
    return false;

  }
}


```
