const QueueStack=require("../stack-queue-pseudo")

describe('quque stack check', () => {
    test('enqueue', () => {
        let newQueue=new QueueStack();
        newQueue.enqueue(3)
        expect(newQueue.peek()).toEqual(3);

     })

     it('dequeue a queuestack', () => {
        let newQueue=new QueueStack();
        newQueue.enqueue(4)
        newQueue.enqueue(4)
        newQueue.dequeue()
        expect(newQueue.peek()).toEqual(4);
    })
    test('enqueue a queuestack', () => {
      let newQueue=new QueueStack();
      newQueue.enqueue(3)
      newQueue.enqueue(2)
      newQueue.enqueue(1)
      console.log(newQueue.peek())
      expect(newQueue.peek()).toEqual(1);
   })
    it('Calling pop or peek on empty qeueustack', () => {
      let newQueue=new QueueStack();
      newQueue.enqueue(1)
      newQueue.enqueue(2)
      newQueue.dequeue()
      newQueue.dequeue()
      newQueue.dequeue()
      expect(newQueue.peek()).toEqual(null);
   })


     it('Instantiate an empty qeueustack', () => {
        let newQueue=new QueueStack();
        expect(newQueue.peek()).toEqual(null)
      })
      it('empty a queuestack after  dequeue', () => {
        let newQueue=new QueueStack();
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        newQueue.dequeue()
        newQueue.dequeue()
        newQueue.dequeue()
        expect(newQueue.peek()).toEqual(null);
    })

});
