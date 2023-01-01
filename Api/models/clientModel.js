const mongoose = require("mongoose");
const validator = require("validator")
// ClientId, AgencyId, Name, Email, PhoneNumber, TotalBill

const clientSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        unique:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:validator.isEmail

    } ,
    phonenumber:{
        type:Number,
        required:true
    }, 
    totalBill : {
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("Client",clientSchema)

