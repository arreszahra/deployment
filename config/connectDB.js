const mongoose= require("mongoose");
 require("dotenv").config();
 // const uri=process.env.MONGO_URI;

const connectDB=async()=>{
   
    try{await
         mongoose.connect("mongodb+srv://arreszahra0:iejlOouiCgA7f1RE@cluster0.q0mldkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{}) 
    console.log("connected to DB")
}
    
    catch (error){console.error("erreur DB", error.message)
}
}
module.exports=connectDB