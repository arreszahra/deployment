const mongoose=require("mongoose")
const schema=mongoose.Schema
//stan3t el modele
const ContactSchema=new schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number}
})
module.exports=Contact=mongoose.model('contact',ContactSchema)