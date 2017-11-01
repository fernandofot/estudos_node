var fs = require('fs');

//Rename the file "mynewfile.txt" into "myrenamedfile.txt":
fs.rename('mynewfile.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
