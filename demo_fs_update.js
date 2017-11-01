var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile.txt', 'This is my text.', function (err){
  if (err) throw err;
  console.log('Updated!');
});
