
//*** Calculator challenge 4.4 */

console.log('\n');
console.log('*** Beginning of Calculator Challenge 4.4 ***');
console.log('\n');

//*** if else calculator */
// console.log('---if else example---');
// console.log('\n');

// function calculator(num1, num2, operator){
//     if (operator === '*'){
//         console.log(`Your entry of: ${num1} * ${num2} = ${num1 * num2}`);
//     }

//     else if (operator === '/'){
//         console.log(`Your entry of: ${num1} / ${num2} = ${num1 / num2}`);
//     }

//     else if (operator === '+'){
//         console.log(`Your entry of: ${num1} + ${num2} = ${num1 + num2}`);
//     }

//     else if (operator === '-'){
//         console.log(`Your entry of: ${num1} - ${num2} = ${num1 - num2}`);
//     }

//     else console.log(`${operator} is not a valid operator for this exercise, please guess another operator!`);    
// }

//*** switch calculator */
console.log('--- switch example---');
console.log('\n');

function calculator(num1, num2, operator){
  
    switch (num1, num2, operator) {
        case '*':
            console.log(`The selection you made of ${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            console.log(`The selection you made of ${num1} / ${num2} = ${num1 / num2}`);
            break;
        case '+':
            console.log(`The selection you made of ${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`The selection you made of ${num1} - ${num2} = ${num1 - num2}`);
            break;
        default:
            console.log(`The operator '${operator}' that you chose is not valid for this exercise, please guess again!`);
            break;
    }
}


//*** f(x) invocations */

calculator(2, 4, '*');
console.log('\n');

calculator(2, 4, '/');
console.log('\n');

calculator(2, 4, '+');
console.log('\n');

calculator(2, 4, '-');
console.log('\n');

calculator(2, 4, '%');
console.log('\n');

console.log('\n');
console.log('*** End of Calculator Challenge 4.4 ***');
console.log('\n');
