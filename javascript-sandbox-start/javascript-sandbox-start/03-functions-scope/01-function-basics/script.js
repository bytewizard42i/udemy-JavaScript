
// Functions, scope, and Executiom Context

console.log('\n');

console.log('----------Beginning of Session ----------');

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
    console.log('pre-return');
    return(num1 - num2);
    console.log('post-return');
}

subtract(20, 10);


