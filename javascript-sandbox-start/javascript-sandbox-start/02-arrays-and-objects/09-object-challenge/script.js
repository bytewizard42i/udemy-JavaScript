
//Object Challenge

console.log('\n');

console.log('Object Challenge');

console.log('\n');

const status = {own : true, reading : false, read : false};
//* note: changing the position of status to the bottom of page results in an error, it cannot access the status variable. Tried it just to see.

const book1 = {title : 'Wealth', author : 'Alfred', status};

const book2 = {title : 'Fame', author : 'Billy', status };

const book3 = {title : 'Fortune', author : 'Cahrles', status};

const library = [book1, book2, book3];

console.log('Here is your library', library);

console.log('\n');

//* Finished reading all my books. Change status to read for all books.

book1.status.read = true;

book2.status.read = true;

book3.status.read = true;

console.log('Here is your new library status', library);

console.log('\n');

book1.title = 'firstBook';

console.log('Here are the new changes to your library,\nspecifically changing the name of book1\nfrom Wealth to firstBook\n', library);

console.log('\n');

//* Turn library into a JSON string so you can store it in local storage.

const libraryJSON = JSON.stringify(library);

console.log('Here is your library in JSON format', libraryJSON);

console.log('\n');

