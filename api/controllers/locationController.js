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
