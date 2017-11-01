var fs = require('fs');

//Delete the file mynewfile2.txt2:
fs.unlink('mynewfile2.txt', function (err){
  if (err) throw err;
  console.log('File deleted!');
});
