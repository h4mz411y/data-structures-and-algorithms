'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Full test', () => {

  test ("Both lists are epmty",()=>{
    let list=new LinkedLilst();
    let newList=new LinkedLilst()
    expect(newList.merge(list.head,newList.head)).toEqual([]);
  })

  test ("One list is empty ",()=>{
    let list=new LinkedLilst();
    list.addToLast(1);
    list.addToLast(2);
    list.addToLast(3);
    let newList=new LinkedLilst()
    expect(newList.merge(list.head,newList.head)).toEqual(["1->", "2->", "3->"]);
  })



  test ("length check",()=>{
    let list=new LinkedLilst();
    list.addToLast(1);
    list.addToLast(2);
    list.addToLast(3);
    let newList=new LinkedLilst()
    newList.addToLast(4);
    newList.addToLast(2);
    newList.addToLast(5);
    expect(newList.merge(list.head,newList.head)).toEqual(["1->", "4->", "2->", "2->", "3->", "5->"]);
  })


  test ("check when the two linked list not in same length",()=>{
    let list=new LinkedLilst();
    list.addToLast(1);
    list.addToLast(2);
    list.addToLast(3);
    let newList=new LinkedLilst()
    newList.addToLast(4);
    newList.addToLast(2);
    expect(newList.merge(list.head,newList.head)).toEqual( ["1->", "4->", "2->", "2->", "3->"]);
  })



});
