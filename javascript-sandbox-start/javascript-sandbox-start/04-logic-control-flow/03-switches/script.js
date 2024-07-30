
//*** Switches 4.3 */

console.log('\n');
console.log('*** Switches 4.3 ***');
console.log('\n');

const d = new Date(2022, 4, 10, 17, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is not January, February, nor March');
}

console.log('\n');
console.log('*** End of part 1 code ***');

//*** part II code */

switch (true) {
    case hour < 12:
        console.log('Good Morning!');
        break;
    case hour < 18:
        console.log('Good Afternoon');
    default:
        console.log('Good Night');
}

console.log('\n');
console.log('*** End of part II code ***');