const HashTable = require('../hashTable');

const myHashTable = new HashTable(10);

describe('Hash Table Test', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    myHashTable.set('Test', 'test');
    expect(myHashTable.get('Test')).toEqual([{ Test: 'test' }]);
  });
  it('Retrieving based on a key returns the value stored', () => {
    myHashTable.set('Hamza', 'Fakhreddin');
    expect(myHashTable.get('Hamza')).toEqual([{ Hamza: 'Fakhreddin' }]);
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(myHashTable.get('csacss')).toEqual(null);
  });


  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    myHashTable.set('Ahmad', 'Mohammed');
    myHashTable.set('Mohamad', 'Ahmad');
    expect(myHashTable.get('Ahmad')).toEqual([{ Ahmad: 'Mohammed' }, { Mohamad: 'Ahmad' }]);
  });
  it('Successfully hash a key to an in-range value', () => {
    myHashTable.set('Test', 'test');
    expect(myHashTable.hash('Test')).toBeLessThan(10);
  });
})
