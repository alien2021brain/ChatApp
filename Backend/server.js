const express=require("express")
const dotenv=require("dotenv")
const userRoutes=require("./routes/userRoutes")
connectDB=require("./config/db")


const app=express()
dotenv.config()
connectDB();
app.use("/api/users",userRoutes)
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`)
})
