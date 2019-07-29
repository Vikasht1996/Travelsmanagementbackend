import mongoose from 'mongoose'

 
const Schema = mongoose.Schema
 
const InformationSchema = new Schema({
    Firstname: {
        type: String,
        required: 'Firstname is required'
    },
    
    Lastname: {
        type: String,
        required: 'Lastname is required'
    },
    Email: {
        type: String,
        // unique: true,        
        required: 'Email is required',
        // match:/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/,
    },
    Verifyemail: {
        type: String,
        required: 'Verifyemail does not match',

    },
    Countrycode:{
        type:String,
        required:"Countrcode number is required"
    },
    Mobilenumber:{
        type:String,
        required:"Phone number is required"
    },
    CardType: {
        type: String,
        required: 'CardType is required'
    },
    
    CardHolderName: {
        type: String,
        required: 'Cardholdername is required'
    },
    CardNumber: {
        type: Number,
        // unique: true,        
        required: 'Cardnumber is required',
    },
    CardIdentificationNumber: {
        type: Number,
        required: 'CrdIdentificationNumber is required',

    },
    ExpirationDate:{
        type:Date,
        required:"Expirationdate is required"
    },
    MonthYear:{
        type:Number,
        required:"Monthyear is required"
    },
    BillingZipCode:{
        type:Number,
        required:"Billingzipcode is required"
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
export default InformationSchema;