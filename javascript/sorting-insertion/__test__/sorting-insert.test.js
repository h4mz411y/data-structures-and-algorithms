'use strict';

const sortArray =require("../index")



describe("test " , ()=>{

  test("test", ()=>{

    let arr=[2,3,5,7,13,11]
  sortArray(arr)

  expect(arr[0]).toEqual(2);
  expect(arr[1]).toEqual(3 );
  expect(arr[2]).toEqual(5);
  expect(arr[3]).toEqual(7);
  expect(arr[4]).toEqual(11);
  expect(arr[5]).toEqual(13);


})


test("test2", ()=>{

  let arr=[5,12,7,5,5,7]
sortArray(arr)

expect(arr[0]).toEqual(5);
expect(arr[1]).toEqual(5 );
expect(arr[2]).toEqual(5);
expect(arr[3]).toEqual(7);
expect(arr[4]).toEqual(7);
expect(arr[5]).toEqual(12);


})


test("test3", ()=>{

  let arr=[2,3,5,7,13,11]
sortArray(arr)

expect(arr[0]).toEqual(2);
expect(arr[1]).toEqual(3);
expect(arr[2]).toEqual(5);
expect(arr[3]).toEqual(7);
expect(arr[4]).toEqual(11);
expect(arr[5]).toEqual(13);


})


})
