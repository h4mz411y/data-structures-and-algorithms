const stack=require("../stack-queue-brackets")

describe('stack-queue-brackets test', () => {

  test('one completed bracket', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("[]")).toEqual(true);
    })
    test('fulfiled brackets  ', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("[{}]")).toEqual(true);

     })
    test('uncompleted brackets', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("[}]")).toEqual(false);
     })

    test('one side bracket', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("]")).toEqual(false);
    })
    test('One side brackets only', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("[[[")).toEqual(false);

     })
     test('multible completed brackets', () => {
        let bracktes=new stack();
        expect(bracktes.brackets("[{}][{}][[[]]]")).toEqual(true);
      })

});
