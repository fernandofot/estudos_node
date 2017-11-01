var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { _id: 157, name: 'Choco'},
    { _id: 158, name: 'Limai'},
    { _id: 159, name: 'Vanilla'}
  ];
  db.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
