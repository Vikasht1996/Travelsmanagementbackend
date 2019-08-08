import mongoose from 'mongoose'
import ParisHotel from '../models/parisHotel'
const Parisinfo = mongoose.model('Cardinfo', ParisHotel)

exports.list_all_paris = function(req, res) {
  console.log("hai")
  Parisinfo.find()
  .then((response) => {
    return res.status(200).json({response})
  })
  .catch((error) => {
    console.log("error ====", error)
    return res.status(404).json({error})
  })
  // Parisinfo.find(function(err, data) {
  //   if (err)
  //     res.send(err);
  //   res.json(data);
  // });
};

exports.parisInfo = function(req, res){
    var parisinfo = new Parisinfo(req.body);
    parisinfo.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};
