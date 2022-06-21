# Stacks and Queues
* **Stack:** In the pushdown stacks only two operations are allowed: push the item into the stack, and pop the item out of the stack. A stack is a limited access data structure - elements can be added and removed from the stack only at the top. push adds an item to the top of the stack, pop removes the item from the top. A helpful analogy is to think of a stack of books; you can remove only the top book, also you can add a new book on the top.

* **Queue:** An excellent example of a queue is a line of students in the food court of the UC. New additions to a line made to the back of the queue, while removal (or serving) happens in the front. In the queue only two operations are allowed enqueue and dequeue. Enqueue means to insert an item into the back of the queue, dequeue means removing the front item. The picture demonstrates the FIFO access. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

## Challenge
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Approach & Efficiency
### Big O
* Time >> O(1)
* Space >> O(1)

## API
### Stack

The class  contains the following methods:
* **push:**
adds a new node with that value to the top of the stack with an O(1) Time performance.
* **pop:**
Returns the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack
* **peek**
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack
* **is empty:**
Returns: Boolean indicating whether or not the stack is empty.
### Queue
The class  contains the following methods:
* **enqueue:**
adds a new node with that value to the back of the queue with an O(1) Time performance.
* **dequeue**
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue
* **peek**
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack
is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty

## Test

![stack&queue_test](./stack%26queue_test.PNG)
[Repositry_link](https://github.com/h4mz411y/data-structures-and-algorithms/tree/main/javascript/stack-and-queue)
