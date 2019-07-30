import mongoose from 'mongoose'
import LondonHotel from '../models/landonHotel'
const Londoninfo = mongoose.model('Londoninfo', LondonHotel)
exports.londonInfo = function(req, res){
    var londoninfo = new Londoninfo(req.body);
    londoninfo.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};
