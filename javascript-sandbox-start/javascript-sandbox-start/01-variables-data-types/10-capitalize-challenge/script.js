// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"

const myString = 'developer';

console.log('\n');

console.log('Our word is', myString); // Our word is  developer

console.log('\n');

let myStringFirstLetter = myString[0].toUpperCase();

let myStringTail = myString.slice(1);

let myNewString = myStringFirstLetter + myStringTail;

console.log('The first letter in this string to be capitalized is ', myStringFirstLetter); // The first letter int his string is  D

console.log('\n');

console.log('The tail of this string is:', myStringTail); // The tail of this string is  eveloper

console.log('\n');

console.log('The new string I created is:', myNewString); // The new string is  Developer

console.log('\n');

let testString = myString.slice(3);

console.log('When I slice at postition (3), testString developer = ', testString);

console.log('\n');

testString = myString.slice(6);


console.log('When I slice at postition (6),testString developer = ', testString);

console.log('\n');  



