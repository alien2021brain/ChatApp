const mongoose =require("mongoose")
const bcrypt=require("bcryptjs")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,
        required:true,
        unique:true,
    },
    password:{type:String,required:true},
    pic:{
        type:String,
        default:"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    }
},
{
    timestamp:true,
})
userSchema.methods.matchPassword=async function(enterpassword){

    return await bcrypt.compare(enterpassword,this.password);
}
userSchema.pre('save',async function(next){
    if(!this.isModified){
        next()
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
})
const User=mongoose.model("User",userSchema);
module.exports=User