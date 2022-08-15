class Node  {
constructor (data , next = null){
this.data = data;
this.next = next;
}}

class linkedlist {
constructor (head = null , size = null){
this.head = head;
this.size=size;
}

// insert first ****************
insertFirst (data) {
this.head = new Node(data , this.head)
this.size++;
}

// insert last *****************

insertLast(data){
const node = new Node(data);
let current ;
if (!this.head){
this.head = node;
}else {
current = this.head;
while(current.next){
  current=current.next;
}
current.next = node;
}

this.size++;

}


 // Insert at index**************************
 insertAt(data, index) {
  //  If index is out of range
  if (index > 0 && index > this.size) {
    return;
  }

  // If first index
  if (index === 0) {
    this.insertFirst(data);
    return;
  }

  const node = new Node(data);
  let current, previous;

  // Set current to first
  current = this.head;
  let count = 0;

  while (count < index) {
    previous = current; // Node before index
    count++;
    current = current.next; // Node after index
  }

  node.next = current;
  previous.next = node;

  this.size++;
}

// Get at index ***************************
getAt(index) {
  let current = this.head;
  let count = 0;

  while (current) {
    if (count == index) {
      console.log(current.data);
    }
    count++;
    current = current.next;
  }

  return null;
}

// Remove at index **********************************
removeAt(index) {
  if (index > 0 && index > this.size) {
    return;
  }

  let current = this.head;
  let previous;
  let count = 0;

  // Remove first
  if (index === 0) {
    this.head = current.next;
  } else {
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
  }

  this.size--;
}

// Clear list ************************
clearList() {
  this.head = null;
  this.size = 0;
}

//print list ***********************
printList (){

  let current = this.head;

  while(current){
    console.log(current.data);
    current = current.next;
  }
}
}


let mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }

  return head.next;
};

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}


const ll = new linkedlist();
const l1 = new linkedlist();
const l2 = new linkedlist();



l1.insertFirst(1);
l1.insertFirst(2);
l1.insertFirst(3);


l2.insertFirst(1);
l2.insertFirst(2);
l2.insertFirst(3);



mergeTwoLists(l1,l2);
