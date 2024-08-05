
console.log('\n');
console.log('*** FizzBuzz Challenge ***');
console.log('\n');


// for (let i = 1; i <= 100; i++) {
    
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     }else if (i % 5 === 0) {
//         console.log('Buzz');
//     }else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }else {
//         console.log(i);
//     }
// }

console.log('\n');
console.log('*** trying the challenge with while loop ***');

let i = 1;

while(i <= 100) {
    if (i % 3 === 0) {
        console.log(`Fizz = ${i}`);
    }else if (i % 5 === 0) {
        console.log(`Buzz = ${i}`);
    }else if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz = ${i}`);
    }
}



console.log('*** End FizzBuzz Challenge ***');
console.log('\n');