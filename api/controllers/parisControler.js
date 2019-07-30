import mongoose from 'mongoose'
import ParisHotel from '../models/parisHotel'
const Parisinfo = mongoose.model('Cardinfo', ParisHotel)
exports.parisInfo = function(req, res){
    var parisinfo = new Parisinfo(req.body);
    parisinfo.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};
