
//***function challenge #1 3.9
// console.log('\n');
// console.log('***Function Challenge #1 3.9***');
// console.log('\n');


// function getCelsius(tempF){
//     const fToC = (tempF - 32) * 5 / 9;
//     console.log(`The entered Fahrenheit temperature of ${tempF}\xB0F => Celsius = ${fToC}\xB0C `);
//     console.log('\n');
// }

//***Single line Function
console.log('\n');
console.log('single line function');
const getCelsius = (tempF) => {
    const fToC = ((tempF - 32) * 5 / 9);
     console.log(`The entered Fahrenheit temperature of ${tempF}\xB0F => Celsius = ${fToC}\xB0C `)
};

getCelsius(32);

console.log('\n');

//*** GPT4o version of a single line  */
// const getCelsius = (tempF) => console.log(`The entered Fahrenheit temperature of ${tempF}\xB0F => Celsius = ${((tempF - 32) * 5 / 9)}\xB0C`);

// getCelsius(32);

//***function challenge #2 3.9 */

// console.log('\n');
// console.log('***Function Challenge #2 3.9***');
// console.log('\n');

// const minMax = (arrayParam) => (`For array ${arrayParam}, the min and max are ${Math.min(...arrayParam)} and ${Math.max(...arrayParam)} respectively`);

// console.log(minMax([1,2,3,4,5]));

//*** iife function challenge #3 3.9 */

console.log('\n');
console.log('***Function Challenge #3 3.9***');
console.log('\n');

((l, w) => {
    const result = l * w;
    console.log(`Length ${l} * Width ${w} = area ${result}`)
})(10, 20);


//*** Professors answer...
// ((length, width) => {
// const area = length * width;

// const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

// console.log(output);
// })(10, 5); 