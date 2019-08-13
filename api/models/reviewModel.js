import mongoose from 'mongoose'

 
const Schema = mongoose.Schema
 
const ReviewSchema = new Schema({
    Title: {
        type: String,
        required: 'LocationName is required'
    }, 
    Yourreviews: {
        type: String,
        required: 'LocationName is required'
    },
})
export default ReviewSchema;