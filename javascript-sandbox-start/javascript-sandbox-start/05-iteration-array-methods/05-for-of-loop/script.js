
console.log('\n');
console.log('*** "For of" loop 5.5***');
console.log('\n');

//*** "For of" */
//*** Loop through arrays */
const items = ['book', 'table', 'chair', 'kite'];
const users = [{name: 'Brad' },{name: 'Kate' },{name: 'Steve' },];


// for (const item of items) {
//     console.log(items);
// }

for (const user of users) {
    console.log(user.name);
}

//*** Loop through strings */
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

//*** Loop over Map 

const map = new Map();
map.set('name', 'John');
map.ser('age'. '30');

for (const  [key, value] of map) {
    console.log(key, value);
}








