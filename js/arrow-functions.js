const names = ['wes', 'kait', 'lux'];

// Arrow functions are always anonymous functions
// means functions without names (eg: function sayName() { })

const fullNames = names.map(function(name) {
  return `${name} doe`;
});

// Arrow Function
const fullNames2 = names.map((name) => {
  return `${name} doe`;
})

// Arrow function with one argument
const fullNames3 = names.map(name => {
  return `${name} doe`;
})

// Implicit return
const fullNames4 = names.map(name =>  `${name} doe` );

// Arrow function with no argument
const fullNames5 = names.map(() => `doe`)

// Set an arrow function to a const
const sayName = (name) => `Hello ${name}!`;

console.log(sayName('John Doe'));
