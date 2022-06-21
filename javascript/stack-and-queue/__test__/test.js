const Stack = require("../stack")
const Queue=require("../queue")

describe('stack test', () => {
    test('Can successfully push onto a stack', () => {
        let newStack=new Stack();
        newStack.push(5)
        expect(newStack.peek()).toEqual(5);

     })
    test('Can successfully push multiple values onto a stack', () => {
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(5)
        newStack.push(4)
        expect(newStack.peek()).toEqual(4);
     })
     test('Can successfully pop off the stack', () => {
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(6)
        newStack.pop()
        expect(newStack.peek()).toEqual(6);
    })
    test('Can successfully empty a stack after multiple pops', () => {
        let newStack=new Stack();
        newStack.push(6)
        newStack.push(7)
        newStack.pop()
        newStack.pop()
        newStack.pop()
        expect(newStack.peek()).toEqual(null);
    })
    test('Can successfully peek the next item on the stack', () => {
        let newStack=new Stack();
        newStack.push(6);
        expect(newStack.peek()).toEqual(6);

     })
     test('Can successfully instantiate an empty stack', () => {
        let newStack=new Stack();
        expect(newStack.peek()).toEqual(null)
      })
    test('Calling pop or peek on empty stack raises exception', () => {
        let newStack=new Stack();
        newStack.push(5)
        newStack.push(6)
        newStack.pop()
        newStack.pop()
        newStack.pop()
        expect(newStack.peek()).toEqual(null);
     })
     test('Can successfully enqueue into a queue', () => {
      let newQueue=new Queue()
      newQueue.enque(6)
      expect(newQueue.peek()).toEqual(6)

  })
  test('Can successfully enqueue multiple values into a queue', () => {
      let newQueue=new Queue()
      newQueue.enque(4)
      newQueue.enque(5)
      newQueue.enque(6)
      expect(newQueue.peek()).toEqual(4)
  })
  test('Can successfully dequeue out of a queue the expected value', () => {
      let newQueue=new Queue()
      newQueue.enque(4)
      newQueue.enque(5)
      newQueue.dequeu()
      expect(newQueue.peek()).toEqual(5)
  })
  test('Can successfully peek into a queue, seeing the expected value', () => {
      let newQueue=new Queue()
      newQueue.enque(4)
      expect(newQueue.peek()).toEqual(4)
  })
  test('Can successfully empty a queue after multiple dequeues', () => {
      let newQueue=new Queue()
      newQueue.enque(4)
      newQueue.enque(4)
      newQueue.enque(4)
      newQueue.dequeu()
      newQueue.dequeu()
      newQueue.dequeu()
      newQueue.dequeu()
      expect(newQueue.peek()).toEqual(null)
   })
  test('Can successfully instantiate an empty queue', () => {
      let newQueue=new Queue()
      expect(newQueue.isEmpty()).toEqual(true)
   })
  test('Calling dequeue or peek on empty queue raises exception', () => {
      let newQueue=new Queue()
      expect(newQueue.peek()).toEqual(null)
   })


});



