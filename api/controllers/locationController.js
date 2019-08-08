import mongoose from 'mongoose'
import LocationSchema from '../models/lactionModule'
const Location = mongoose.model('Location', LocationSchema)
exports.location = function(req, res){
    var location = new Location(req.body);
    location.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};
    exports.list_all_location = function(req, res) {
      console.log(req)
      Location.find({LocationName:req.query['LocationName']})
      .then(user => {
        if (user) {
        res.json(user)
        } else {
        res.send("User does not exist")
        }
        })
        .catch(err => {
        res.send('error: ' + err)
        })
        }
        

    // profile.get('/studentProfile', (req, res) => {
    //   console.log(req)
    //   StudentProfile.find({
    //   studentname: req.query['studentname']
      
    //   })
    //   .then(user => {
    //   if (user) {
    //   res.json(user)
    //   } else {
    //   res.send("User does not exist")
    //   }
    //   })
    //   .catch(err => {
    //   res.send('error: ' + err)
    //   })
    //   })
      