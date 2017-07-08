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



// findOneAndUpdate
// ObjectId("5922c22bf7fc6dbd76c65ee0")
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('59229015a20e3d6d31d8f2f3')
},{
  $set: {
    name: "Jayant"
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((results) => {
  console.log(results);
})

  // db.close();
});
