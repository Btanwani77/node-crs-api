const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = '123abc!';

bcrypt.genSalt(10,(err,salt) => {
  bcrypt.hash(password,salt,(err,hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$Hnc1zPbCmxmw7EzC4b1Gj.rPOzR6A8YdIH/fhwxMEEqZy3negQfvy'

bcrypt.compare('123abc',hashedPassword,(err,res) => {
  console.log(res);
});

// var data = {
//   id:10
// };


// var token = jwt.sign(data,'123abc');
// // jwt.verify();
// console.log(token);
//
// var decoded = jwt.verify(token,'123abc')
// console.log(decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// // token.data.id=5;
// // token.hash = SHA256(JSON.stringify(data)).toString()
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if(resultHash === token.hash){
//   console.log("data was not changed");
// } else {
//   console.log('data was changed');
// }
