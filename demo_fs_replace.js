var fs = require('fs');

//Replace the filw with a new one:
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
if (err) throw err;
console.log('Replaced!');
});
