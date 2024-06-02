// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

// Generally speaking always use const unless you know you are going to reassign the value of the variable

console.log(firstName, lastName);

console.log('\n');

let age = 30;

console.log(age);

console.log('\n');

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs

// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// reassigning variables

age = 35;
console.log('Your new age is', age);

console.log('\n');

firstName = 'Jeff';
console.log('Your first name is',firstName); 

console.log('\n');

let score = 1;
console.log('Your score', score);

console.log('\n');

if (true) {
    score = score + 1;
}

console.log('Your new score is', score);



