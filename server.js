const express=require ("express")
const app=express()
const connectDB=require("./config/connectDB")
//Middleware:
app.use(express.json())

//connect database:
connectDB()

//routes
app.use("/contacts",require("./routes/contact"))

// run server
const port=5000;
app.listen(port,err=> err? console.log("error "):console.log(`server is running in ${port}` ) )