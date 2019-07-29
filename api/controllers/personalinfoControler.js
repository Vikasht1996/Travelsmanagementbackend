import mongoose from 'mongoose'
import InformationSchema from '../models/personalinfoModule'
const PersonInfo = mongoose.model('PersonInfo', InformationSchema)
exports.personalInfo = function(req, res){
    if(req.body.Email===req.body.Verifyemail){
    var personInfo = new PersonInfo(req.body);
    personInfo.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )
}
    else {
        res.send('Email id does not match');
        }

};
   
