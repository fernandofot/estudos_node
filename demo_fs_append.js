var fs = require('fs');

//create a file named mynewfile.txt:
fs.appendFile('mynewfile.txt', 'Hello content!', function (err){
  if (err) throw err;
  console.log('Saved!');
});
