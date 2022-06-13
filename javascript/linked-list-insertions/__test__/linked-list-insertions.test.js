'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Create a linked list', () => {
  it("1.Can successfully add a node to the end of the linked list ",()=>{
    let list=new LinkedLilst();
    expect(list.head).toBeNull();
  })
  it ("2.Can successfully add multiple nodes to the end of a linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast("First");
    list.AddAtTheLast("second");
    expect(list.head.data).toEqual('First')
  })
  it ("3.Can successfully insert a node before a node located i the middle of a linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.insertBeforIndex(2,100)
    expect(list.print()).toEqual("1->2->100->3->4->5->6->")
  })

  it ("4.Can successfully insert a node before the first node of a linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.insertBeforIndex(0,100)
    expect(list.print()).toEqual("100->1->2->3->4->5->6->")
  })
  it ("5.Can successfully insert after a node in the middle of the linked list",()=>{
    let list=new  LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.inserAfterIndex(2,100)
    expect(list.print()).toEqual("1->2->3->100->4->5->6->")
  })
  it ("6.Can successfully insert a node after the last node of the linked list",()=>{
    let list=new LinkedLilst()
    list.AddAtTheLast(1);
    list.AddAtTheLast(2);
    list.AddAtTheLast(3);
    list.AddAtTheLast(4);
    list.AddAtTheLast(5);
    list.AddAtTheLast(6);
    list.inserAfterIndex(5,100)
    expect(list.print()).toEqual("1->2->3->4->5->6->100->")
  })


});
