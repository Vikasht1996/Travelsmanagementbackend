import mongoose from 'mongoose'

 
const Schema = mongoose.Schema
 
const LocationSchema = new Schema({
    LocationName: {
        type: String,
        required: 'LocationName is required'
    }, 
})
export default LocationSchema;