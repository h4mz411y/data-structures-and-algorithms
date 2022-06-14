"use strict";
const LinkedList = require("../index");

describe("Test", () => {
  test("1.Can successfully add a node to the end of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("1");
    linkedList.Insert("2");
    linkedList.Insert("3");
    linkedList.Insert("4");
    linkedList.Insert("5");
    linkedList.append("6");
    expect(linkedList.ToString()).toBe("1 -> 2 -> 3 -> 4 -> 5 -> 6 -> ");
  });
  test("2.Can successfully add multiple nodes to the end of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("1");
    linkedList.Insert("2");
    linkedList.Insert("3");
    linkedList.Insert("4");
    linkedList.Insert("5");
    linkedList.append("6");
    linkedList.append("7");
    linkedList.append("8");
    expect(linkedList.ToString()).toBe(
      "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> "
    );
  });
  test("3.Can successfully insert a node before a node located i the middle of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("5");
    linkedList.Insert("1");
    linkedList.Insert("4");
    linkedList.insertBefore("1", "2");
    expect(linkedList.ToString()).toBe("5 -> 2 -> 1 -> 4 -> ");
  });
  test("4.Can successfully insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("1");
    linkedList.Insert("3");
    linkedList.Insert("5");
    linkedList.insertBefore("1", "4");
    expect(linkedList.ToString()).toBe("4 -> 1 -> 3 -> 5 -> ");
  });
  test("5.Can successfully insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("5");
    linkedList.Insert("1");
    linkedList.Insert("4");
    linkedList.insertAfter("1", "2");
    expect(linkedList.ToString()).toBe("5 -> 1 -> 2 -> 4 -> ");
  });
  test("6.Can successfully insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("3");
    linkedList.Insert("2");
    linkedList.Insert("1");
    linkedList.insertAfter("1", "4");
    expect(linkedList.ToString()).toBe("3 -> 2 -> 1 -> 4 -> ");
  });
});
