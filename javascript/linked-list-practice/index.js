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

// insert first
insertFirst (data) {
this.head = new Node(data , this.head)
this.size++;
}

// insert last



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











//print list
printList (){

  let current = this.head;

  while(current){
    console.log(current.data);
    current = current.next;
  }
}





}



const ll = new linkedlist();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst(4);
ll.insertLast(0)
ll.printList();
