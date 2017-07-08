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


// deleteMany

// db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
//   console.log(result);
// })

// deleteOne


// db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
//   console.log(result);
// })

// findOneAndDelete

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })


// db.collection('Users').deleteMany({name:"Tanwani"});
db.collection('Users').findOneAndDelete({_id: new ObjectID("59229013dbfaf16d2056b052")}).then((results => {
  console.log(JSON.stringify(results,undefined,2));
}));


  // db.close();
});
