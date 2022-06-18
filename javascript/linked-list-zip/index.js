

class Node{
  constructor(value,next=null){
      this.value=value;
      this.next=next;
  }
}
class LinkedList {
  constructor(){
      this.head=null;
      this.tail=null;
      this.size=0;
  }
  addToLast(value){
      let node =new Node(value)
      if(this.head===null){
          this.head=node;
          this.tail=node;
      }
      else{
          let node=new Node(value);
          this.tail.next=node;
          this.tail=node;
      }
      this.size++
  }

  print(){
      let current=this.head;
      let printer=[]
      while(current){
          printer.push(`${current.value}->`)
          current=current.next;
      }
      return printer;
  }
  merge(list,list1){
      let current=list;
      let newValue=list1;
      let list3=new LinkedList()
      let route=0
      while(current&&newValue){
          if(route%2==0){
              list3.addToLast(current.value)
              current=current.next
              route++
          }
          else {
              list3.addToLast(newValue.value)
              newValue=newValue.next
              route++
          }
      }
      while(current){
          list3.addToLast(current.value)
          current=current.next
      }
      while(newValue){
          list3.addToLast(newValue.value)
          newValue=newValue.next

      }
      return list3.print()
  }

}



module.exports=LinkedList
