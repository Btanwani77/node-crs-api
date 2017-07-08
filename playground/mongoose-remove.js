var {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');


// Todo.remove({}) <-- cant be remove(), to remove all remove({})
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove() <-- return doc
// Todo.findByIdAndRemove() <-- return doc

Todo.findOneAndRemove(_id:"Todo.findOneAndRemove()").then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5924832016f9dd001171b11f').then((todo) => {
//   console.log(todo);
// })
