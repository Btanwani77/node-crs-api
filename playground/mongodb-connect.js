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


// inserting data to database
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed:false
  // },(err,result) => {
  //   if(err) {
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Tanwani',
  //   age:25,
  //   location: 'Balangir'
  // },(err,result) => {
  //   if(err) {
  //     return console.log('unable to insert User',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  // });


  db.close();
});
