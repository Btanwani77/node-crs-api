var {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');


// var id = '592426a26db756cc500cdefd';
var id = '5923108402e36e1815fa257e';

//
// if(!ObjectID.isValid(id))
// {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:' ,todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos:' ,todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id:' ,todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('user id' ,user);
}).catch((e) => console.log(e));
