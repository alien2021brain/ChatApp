const express=require("express")
const dotenv=require("dotenv")
const app=express()
dotenv.config()
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`)
})
app.get("/",(req,res)=>{
    res.send("<h>api is runn</h>")
})