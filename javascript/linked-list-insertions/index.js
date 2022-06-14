"use strict";
const Node = require("./Node-class");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  AddHead(data) {
    this.head = new Node(data, this.head);
  }
  Insert(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
      this.tail = node;
    }
    this.length++;
  }
  Includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  ToString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " -> ";
      current = current.next;
    }
    return str;
  }
  Print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  append(newdata) {
    let node = new Node(newdata);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insertBefore(data, newdata) {
    let node = new Node(newdata);
    let current = this.head;
    let previousNode = null;
    while (current) {
      if (current.data === data) {
        if (previousNode === null) {
          this.head = node;
          node.next = current;
        } else {
          previousNode.next = node;
          node.next = current;
        }
        this.length++;
        return;
      }
      previousNode = current;
      current = current.next;
    }
  }
  insertAfter(data, newdata) {
    let node = new Node(newdata);
    let current = this.head;
    while (current) {
      if (current.data === data) {
        node.next = current.next;
        current.next = node;
        this.length++;
        return;
      }
      current = current.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.Print();

module.exports = LinkedList;
