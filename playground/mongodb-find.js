// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // both this and above code is same


// to get diffrent object id

// var obj = new ObjectID();
// console.log(obj);

//  Object Destructuring
// var user = {name : "Jayant",age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb Server!!');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Users').find({
    name: 'Tanwani'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });
  //
  db.collection('Users').find({
    name: 'Tanwani'
  }).count().then((count) => {
    console.log(`Users count: ${count}`);
    // console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });

  db.close();
});
