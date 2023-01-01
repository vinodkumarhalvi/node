const mongoose = require("mongoose");
 const validator = require("validator")

const agencySchema = new mongoose.Schema({
    agencyId:{
        type:Number,
        required:true
    }, 
    name:{
        type:String,
        required:[true,"please provide true"]
    },
    address1:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }, 
    phonenumber:{
        type:Number,
        required:true
    }, 
    clients:[{
        clientName:{
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
    }]
        
    
   
    

})

module.exports = mongoose.model("Agency",agencySchema);

