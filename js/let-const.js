const KEY = 'abc123'; // can't ne updated
let points = 50;
let winner = false; // can be updated

const person = {
  name: 'John Doe',
  age: 28
}

//person = { name: 'Yep'}; // can't change
person.age = 55; // the property of the object can change even if it's a const
console.log(person);

Object.freeze(person);
person.age = 60; // the object is freezed you can't change enything
console.log(person);
