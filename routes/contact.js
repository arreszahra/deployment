const express=require("express")
const router=express.Router()
const Contact= require("../models/Contact")


//simple test bich na3ref el routage yi5dem wala le 
//localhost:5000/contacts/test
//@ path
//test route
//public ou private
router.get('/test', (req,res)=>{
    res.send("tested")
})

// add Contact
router.post('/addContact',(req,res)=>{
    const{name,email,phone}=req.body //3malna destruction lihom donc nwaliw nista3mlohom anychere
    const newContact= new Contact({
        name,email,phone
    })
   //bich nsayviwoh f database
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch((err)=>console.log(err))
})

//get all contacts
router.get('/all',(req,res)=>{
    Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

//delete
router.delete("/deleteContact/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOneAndDelete({_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

// get contact by id
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOne({_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})
//edit contact
router.put("/editContact/:_id",(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    Contact.findOneAndUpdate({_id},{ $set:{name,email,phone}})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})
/*
router.post('/addContact',(req,res)=>{
    const {name,email,phone}=req.body;
    const newContact = new Contact({name,email,phone})
    newContact.save();
    res.send(newContact)
})
*/

module.exports=router
