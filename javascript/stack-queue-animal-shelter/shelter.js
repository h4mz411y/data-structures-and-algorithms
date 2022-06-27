'use strict';

const Queue = require('./queue');

class Shelter {
    constructor() {
        this.dog = new Queue();
        this.cat = new Queue();
    }

    enqueue(animal) {
        if (animal.animalType === 'dog') {
            this.dog.enqueue(animal);
            return animal;
        } else if (animal.animalType === 'cat') {
            this.cat.enqueue(animal);
            return animal;
        } else {
            return ('cats or dogs only');
        }
    }
    dequeue(pref) {
        if (pref === 'dog') {
            return this.dog.dequeue(pref);
        } else if (pref === 'cat') {
            return this.cat.dequeue(pref);
        } else {
            return null;
        }
    }

}

let shelter = new Shelter();

let dog = {
    name: 'name',
    animalType: 'dog',
}

let cat = {
    name: 'name',
    animalType: 'cat',
}

let bird = {
    name: 'name',
    animalType: 'bird',
}

let dog2 = {
    name: 'name2',
    animalType: 'dog',
}

shelter.enqueue(dog2);
shelter.enqueue(dog);
shelter.enqueue(cat);
shelter.enqueue(bird);


console.log(shelter.enqueue(dog));
console.log(shelter.enqueue(cat));
console.log(shelter.enqueue(bird));
console.log(shelter.dequeue('dog'));
console.log(shelter.dequeue('bird'));

module.exports = Shelter;
