import mongoose from 'mongoose'
import SingaporeHotel from '../models/sinagporeHotel'
const Singaporeinfo = mongoose.model('Singaporeinfo', SingaporeHotel)
exports.singaporeInfo = function(req, res){
    var singaporeinfo = new Singaporeinfo(req.body);
    singaporeinfo.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};
