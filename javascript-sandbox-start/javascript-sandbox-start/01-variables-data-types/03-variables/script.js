// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

// Generally speaking always use const unless you know you are going to reassign the value of the variable

console.log(firstName, lastName);

//*-----------------------------*//

console.log('\n');

let age = 30;

console.log(age);

//*-----------------------------*//

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

//*-----------------------------*//

const x = 100;

// x = 200; This will throw an error because we are trying to reassign a const variable

// const score1; This will throw an error because we are not assigning a value to the const variable

console.log('\n');

console.log('Your constant x is saved as', x);

console.log('\n'); // adding a blank line

//* working with arrays ----------------------*//

const arr = [1, 2, 3, 4];

arr.push(5); // this method 'push' adds a new element to the end of the array

console.log('Your array is', arr);

//*-----------------------------*//

console.log('\n');

const person = {
    customerName: 'Steve'  // object name set to person
};

console.log('Your person object is', person);

person.customerWife = 'Sarah'; // adding a value of a key to the object

person.customerFriend = 'Brad'; // adding a value of a key to the object

person.customerEmail = 'steve@gmail.com'; // adding a value of a key to the object

person.customerAge = 30; // adding a value of a key to the object

person.customerAddress = '123 Main St'; // adding a value of a key to the object

person.customerCity = 'Miami'; // adding a value of a key to the object

person.customerState = 'FL'; // adding a value of a key to the object

person.customerZip = '33101'; // adding a value of a key to the object

person.customerPhone = '305-555-5555'; // adding a value of a key to the object

person.customerCountry = 'USA'; // adding a value of a key to the object

person.customerOccupation = 'Developer'; // adding a value of a key to the object

person.customerSalary = 100000; // adding a value of a key to the object

person.customerMarried = true; // adding a value of a key to the object

person.customerChildren = 2; // adding a value of a key to the object

person.customerTimeWithUs = 5; // adding a value of a key to the object

console.log('\n');

console.log('Your person object is now', person);





