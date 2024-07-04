
// Arrow Functions
// example 1

// console.log('\n');
// console.log('***Beginning of module***');
// console.log('\n');
 
// function add(a,b) {
//     return a + b
// }
console.log('\n');

// normal Arrow f(x) syntax -another way to make the function
// example 2

const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));
console.log('\n');

// We can make this Arrow Syntax even shorter
// We can get rid of the curly braces and return statement

// Implicit Return
const subtract = (a, b) => a - b;

console.log(subtract(10, 2));
console.log('\n');

// Even shorter, when just 1 param, dont need parentheses
const double = a => a * 2;

console.log(double(10));

// using a template literal to add some text to my answer
console.log(`Here is your function: ${double} = ${double(10)}`);
console.log('\n');

// Returning an object:
// As is will return undefined, you must surround object with parentheses

// const createObj = () => {
//     name: 'Brad';
// };
// This returns undefined.

// Here is the correct way:

const createObj = () => ({
    name: 'Brad'
});

console.log(createObj());
console.log('\n');


// We havent gone over any high order array methods or callbacks, but they are a great place to use arrow functions

const numbers = [1,2,3,4,5];

numbers.forEach(function (n) {
    console.log(n);
})
console.log('\n');

// We can really shorten this up:

numbers.forEach((n) => console.log(n));
// Dont even need the parentheses around the 1st n above



console.log('***End of module***');
console.log('\n');



