import mongoose from 'mongoose'
import downloadSchema from '../models/userModel'
const User = mongoose.model('Download', downloadSchema)
import bcrypt from 'bcrypt';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

exports.signup = function(req, res){
    const reg_exp=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(reg_exp.test(req.body.Email)){
    User.find({Email: req.body.Email},function(err, data){
    if(data != null && data != ''){
    res.send('User already exists');
    }
    else
    { 
      if(req.body.password)
      {
              res.send("password does not match");
            }
            var user = new User(req.body);
            bcrypt.genSalt(10, function (err, salt) {
              bcrypt.hash(user.Password, salt, function (err, hash) {
                user.Password = hash;
                user.save(function (err, data) {
                  if (err)
                    res.json(data);
                  res.send("User Created Succesfully");
                })
              })
            })
          }
        });
    }
        else {
            res.send('Enter valid email_id');
            }
      };
      exports.login = function (req, res) {
        User.find({ Email: req.body.Email }, function (err, data) {
          if (data != null && data != '') {
            bcrypt.compare(req.body.Password, data[0].Password, function (err, isMatch) {
              if (isMatch == true) {
                res.send("Login successfully");
              }
            });
          }
          else {
            res.send("User does not exists");
          }
        });
      };
































    
    
   
    



