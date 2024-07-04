
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


console.log('***End of module***');
console.log('\n');






