const mongoose=require("mongoose")
// name sender 
// content of sender message
// ref of reciver 
const messageModel=mongoose.Schema({
     sender:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
     content:{type:String,trim:true},
     chat:{type:mongoose.Schema.Types.ObjectId,ref:"Chat"}

})
const Message=mongoose.model("message",messageModel);
module.exports=Message;