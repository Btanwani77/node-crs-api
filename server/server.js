require('./config/config')
const _ = require('lodash')
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {crs} = require('./models/crs');
// const {User} = require('./models/user');
// const {authenticate} = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/crs',(req,res) => {
  var crsData = new crs({
    profName: req.body.profName,
    // _creator:req.user._id

  });
  crsData.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  })
});

app.get('/crs',(req,res) => {
  crs.find({
    // _creator:req.user._id
  }).then((crsData) => {
    res.send({crsData});
  },(e) => {
    res.status(400).send(e);
  });
});

app.listen(port,() => {
  console.log(`Started on port ${port}`);
});


module.exports = {app};
