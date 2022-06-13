'use strict';

class Node {
  constructor(value, pointer = null) {
    this.value = value
    this.pointer = pointer
  }
}


class LinkedList {

  constructor(head = null) {
    this.head = head;
  }

    insert(value) {
      let oldHead = this.head
      this.head = new Node(value, oldHead)
    }

    includes(value) {
      let head = this.head
      let res = false
      while(head) {
        if(head.value == value) {
          res = true
          break;
        }
        head = head.pointer
      }
      return res
    }

    toString() {
      let head = this.head
      let res = ''
      while(head) {
        res += `{${head.value}}=>`
        head = head.pointer
      }
      res += `NULL`
      return res
    }
}


module.exports = LinkedList;



