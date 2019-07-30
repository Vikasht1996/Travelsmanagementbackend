import mongoose from 'mongoose'

 
const Schema = mongoose.Schema
 
const SingaporeHotel = new Schema({
    Hotelname: {
        type: String,
        required: 'CardType is required'
    },
    
    Cityname: {
        type: String,
        required: 'Cardholdername is required'
    },
    Numberofreviews: {
        type: Number,
        // unique: true,        
        required: 'Cardnumber is required',
    },
    Discription: {
        type: String,
        required: 'CrdIdentificationNumber is required',

    },
    Amount:{
        type:Number,
        required:"Expirationdate is required"
    },
    Create_At:{
        type:Date,
        default:Date.now
    },
    Updated_At:{
        type:Date,
        default:Date.now
    },
})
export default SingaporeHotel;