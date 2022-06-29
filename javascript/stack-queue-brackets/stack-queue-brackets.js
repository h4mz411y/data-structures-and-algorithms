'use strict';

const Node = require('./node');

module.exports= class Stack{
  constructor(){
      this.head=null;
      this.size=0;
  }
  push(value){
      let node=new Node(value);
      if(this.head==null){
          this.head=node;
          this.size++
      }
      else {
          node.next=this.head;
          this.head=node;
          this.size++
      }
  }
  pop(){
      if(this.head==null){
          return null
      }
      else {
          let temp=this.head.value
          this.head=this.head.next
          this.size--
          return temp
      }
  }
  print(){
      let curent=this.head;
      let prenter=[]
      while(curent){
          prenter.push(`${curent.value}->`)
          curent=curent.next;
      }
      return console.log(prenter)
  }

  brackets(input){
      input=input.split("")

      let container=new Stack()

      if(input.length<2){return false}
      if(input.includes("]")||input.includes("}")||input.includes("]")){

      for(let i=0;i<input.length;i++){

          if(input[i]=="["||input[i]=="{"||input[i]=="("){

              container.push(input[i])
          }
          if(input[i]=="]"||input[i]=="}"||input[i]==")"){
              if(input[i]=="}"){
                  if(container.pop()!=="{"){return false}

              }
              if(input[i]==")"){
                  if(container.pop()!=="("){return false}

              }
              if(input[i]=="]"){
                  if(container.pop()!=="["){return false}

              }
          }

      }
      return true
  }
  return false
  }
}
