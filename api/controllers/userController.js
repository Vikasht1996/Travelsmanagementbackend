import mongoose from 'mongoose'
import downloadSchema from '../models/userModel'
const User = mongoose.model('Download', downloadSchema)
// import LocationSchema from '../models/lactionModule'
// const Location = mongoose.model('Location', LocationSchema)
import bcrypt from 'bcrypt';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
import jwt from 'jsonwebtoken'

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
      // exports.login = function (req, res) {
      //   User.find({ Email: req.body.Email }, function (err, data) {
      //     if (data != null && data != '') {
      //       bcrypt.compare(req.body.Password, data[0].Password, function (err, isMatch) {
      //         if (isMatch == true) {
      //           res.send("Login successfully");
      //         }
      //       });
      //     }
      //     else {
      //       res.send("User does not exists");
      //     }
      //   });
      // };

      exports.login = (req,res,next) =>{
        const Email = req.body.Email;
        const Password = req.body.Password;
        let loadedUser;
        User.findOne({Email:Email})
        .then(user =>{
        if(!user){
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
        }
        loadedUser = user;
        return bcrypt.compare(Password,user.Password);
        })
        .then(isEqual =>{
        if(!isEqual){
        const error = new Error('wrong password.');
        error.statusCode = 401;
        throw error;
        }
        const token = jwt.sign(
        {
        Email: loadedUser.Email,
        userId:loadedUser._id.toString()
        },
        'secret',
        
        )
        res.status(200).json({token: token, userId: loadedUser._id.toString()})
        })
        
        .catch(err => {
        if (!err.statusCode) {
        err.statusCode = 500;
        }
        next(err);
        
        });
        
        }






      // exports.location = function(req, res){
      //     var location = new Location(req.body);
      //     location.save(function (err, data) {
      //         if (err)
      //           res.json(data);
      //         }
      //     )};
      































    
    
   
    



