'use strict';
const shelter = require('../shelter')


describe('shelter test', () => {

  it('Can successfully enqueue cat', () => {
    let Shelter = new shelter();
    let cat = {
      name: 'name',
      animalType: 'cat',
    }
    expect(Shelter.enqueue(cat)).toMatchObject(cat);
  });

  it('Can successfully dequeue cat', () => {
      let Shelter = new shelter();
      let cat = {
          name: 'name',
          animalType: 'cat',
      }
      let dog = {
          name: 'name',
          animalType: 'dog',
      }
      Shelter.enqueue(cat);
      Shelter.enqueue(dog);
      expect(Shelter.dequeue('cat')).toMatchObject(cat);
  });

  it('Can successfully enqueue dog', () => {
    let Shelter = new shelter();
    let dog = {
      name: 'name',
      animalType: 'dog',
    }
    expect(Shelter.enqueue(dog)).toMatchObject(dog);
  });

  it('Can successfully dequeue dog', () => {
    let Shelter = new shelter();
    let dog = {
        name: 'name',
        animalType: 'dog',
    }
    let cat = {
        name: 'name',
        animalType: 'cat',
    }
    Shelter.enqueue(dog);
    Shelter.enqueue(cat);
    expect(Shelter.dequeue('dog')).toMatchObject(dog);
});

  it('enqueue if not a cat or a dog', () => {
      let Shelter = new shelter();
      let bird = {
          name: 'name',
          animalType: 'bird',
      }
      expect(Shelter.enqueue(bird)).toBe('cats or dogs only');
  });



  it('dequeue if not a cat or a dog', () => {
      let Shelter = new shelter();
      let bird = {
          name: 'name',
          animalType: 'bird',
      }
      Shelter.enqueue(bird);
      Shelter.dequeue('bird');
      expect(Shelter.enqueue(bird)).toBe('cats or dogs only');
      expect(Shelter.dequeue('bird')).toBeNull();
  });
});
