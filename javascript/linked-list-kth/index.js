
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

}
class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  addFirst(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = new Node(data);
    } else {
      this.head = new Node(data, this.head);
      this.length++

    }
  }

  print() {
    let current = this.head;
    let sum = []
    while (current) {
      sum.push(`${current.data}->`)
      current = current.next;
    }
    return sum
  }

  lastkth(k) {
    if (k > this.length) {
      return "Exception"
    }
    if (k < 0) {
      return "Kth value is negative"
    }
    else {
      let place = this.length - k
      let current = this.head;
      let counter = 0
      while (current) {
        if (place == counter) {
          return (current.data)
        }
        counter++
        current = current.next;
      }
    }
  }



}



module.exports = LinkedList;
