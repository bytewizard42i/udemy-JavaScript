
// Functions, scope, and Executiom Context

console.log('\n');

console.log('----------Beginning of Functions ----------');

console.log('\n');

console.log('Functions');

console.log('\n');

function sayHello() {
    console.log('Hello World');
}

sayHello();

console.log('\n');

function add(num1, num2){
    console.log(num1 + num2);
}

add(10, 20);

console.log('\n');

function subtract(num1, num2){
    
    return(num1 - num2);
    console.log('post-return');
}

const result = subtract(20, 10);

console.log(result, subtract(20, 5))

console.log('\n');

console.log('----------Beginning of params and arguments---------');

console.log('\n');

// Params and Arguments

// function registeredUser(user) {
//     return user + ' is registered';
// }

// console.log(registeredUser('John'));

// console.log('\n');

//------------------------------------------------

// function registerUser(user) {
//     if (!user) {
//         user = 'bot';
//     }
//     return user + ' is registered';
// }

// console.log(registerUser());

// console.log('\n');

//------------------------------------------------

// Easier way to set default parameters

function registerUser(user = 'bot') {
    return user + ' is registered';
}

console.log(registerUser());

console.log('\n');

//------------------------------------------------

// rest parameters

// function sum(...numbers) { //numbers is a vairable that holds all the arguments passed to the function
//     return numbers;
// }

// console.log(sum(1, 2, 3, 4, 5));

//------------------------------------------------
// pass in infinite variables into an array

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

console.log('\n');

