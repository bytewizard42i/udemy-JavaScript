console.log(100);

console.log('\n');

console.log('Hello World!');

console.log('\n');
console.log(20, 'hello', true);   


console.log('\n');

const x = 100;
console.log("x =", x);

/* 
snippet shortcut: clg[enter]
*/
console.error('This is an error message!');

console.warn('This is a warning message!');

console.table({a: 1, b: 2});

console.group('Johns simple collapsable group');
console.log('x -', x);
console.error('Alert, John!!!');
console.warn('Warning, John!!!');
console.groupEnd();

const styles = 'color: blue; font-size: 20px; background-color: yellow; padding: 10px;';
console.log('%cHello My stylish World!', styles);

