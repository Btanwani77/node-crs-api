var mongoose = require('mongoose');
var crs = mongoose.model('CRS',{
  profName: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  }
});

module.exports = {crs};
//  To insert new todo
// var newTodo = new Todo({
//   text: 23
//
// });
// newTodo.save().then((doc) => {
//   console.log('Saved Todo',doc);
// },(e) => {
//   console.log('Unable to save Todo',e);
//
// });
