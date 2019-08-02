import mongoose from 'mongoose'
import ParisHotel from '../models/parisHotel'
const Parisinfo = mongoose.model('Cardinfo', ParisHotel)

exports.list_all_paris = function(req, res) {
  Parisinfo.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};




exports.parisInfo = function(req, res){
    var parisinfo = new Parisinfo(req.body);
    parisinfo.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};
