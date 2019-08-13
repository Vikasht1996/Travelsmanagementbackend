import mongoose from 'mongoose'
import ReviewSchema from '../models/reviewModel'
const Reviews = mongoose.model('Reviews', ReviewSchema)
exports.reviewInfo = function(req, res){
    var review = new Reviews(req.body);
    review.save(function (err, data) {
        if (err)
        res.send(err);
          res.json(data);
        }
    )};