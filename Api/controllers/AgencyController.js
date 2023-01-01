const { find } = require("../models/agencyModel");
const Agency = require("../models/agencyModel");
const Client = require("../models/clientModel")


//create Agency

exports.createAgencyAndClient = async (req,res,next)=>{
    const agency1=new Agency({
        agencyId :10,
        name : "vagency",
        address1 : "backend street",
        state:"full stack",
        city:"bengaluru",
        phonenumber:1234567890,
        clients:{
            clientName:"cclient",
            email:"client@gmail.com",
            phonenumber:7894561230,
            totalBill:400
        }        
    })

    const agency2=new Agency({
        agencyId :11,
        name : "tagency",
        address1 : "fackend street",
        state:"f stack",
        city:"hyd",
        phonenumber:1234567098,
        clients:{
            clientName:"tclient",
            email:"client2@gmail.com",
            phonenumber:7894561203,
            totalBill:4001
        }        
    })
    
    
    
    const agency = await Agency.insertMany([agency1,agency2]);
    
    res.status(201).json({
        agency
    })
}

exports.updateClient = async (req,res)=>{
    const clientUpdate = await Agency.findByIdAndUpdate(
        {_id:req.params.id},
        // console.log(_id),
        {$set:{
            
            clients:{
                clientName : "vinod",
                email:"vinod@gmail.com",
                phonenumber:1234567890,
                totalBill:4000

            }

        }},
        {new:true},
        )
         
        res.status(201).json({
            clientUpdate
        })
        //  console.log(clientUpdate)

}

exports.getAll = async(req,res)=>{
    const getAllCandA = await Agency.find()

    res.status(201).json({
        getAllCandA
    })
}

exports.highTotalBill = async (req,res)=>{
    const result = await Agency
    .find({}).sort({"totalBill":-1}).limit(1).select("agencyName clientName totalBill")
    res.status(201).json({
        result
    })
    
}





