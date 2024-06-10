//* Array Challenge Part I

console.log('\n');

console.log('Array Challenge Part I');

console.log('\n');

const arr = [1, 2, 3, 4, 5];

console.log(arr);

console.log('\n');

arr.push(6);

arr.reverse();

arr.push(0);

console.log(`When we reverse the array and\nadd 0 and 6, we get: ${arr}`);

console.log('\n');

console.log(arr);

console.log('\n');

//* Array Challenge Part II

console.log('Array Challenge Part II');

console.log('\n');

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2);

console.log(`The combined array of arr1 and arr2\n is: ${arr3}`);

console.log('\n');

let x = arr3.splice(4, 1);

console.log(`The number ${x} was removed from the array\nand the new array is: ${arr3}`);

console.log('\n');

