//  express async handler handle the error automatically
const asyncHandler=require('express-async-handler')
const User=require("../models/UserModel")
const generateToken=require("./generateToken")

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;

    if(!name||!email||!password){
        res.status(400);
        throw new Error("Please enter all the field")
    }
  const userExist=await User.findOne({email})
  if(userExist){
    res.status(400);
    throw new Error("user already exists")
}
 const user =await User.create({
    name,
    email,
    password,
    pic,
 })
 if(user){
    res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email,
        pic:user.pic,
        token:generateToken(user._id)
    })
 }
 else{
    res.status(400);
    throw new Error("failed to create the use")
 }
 
 
});
const authUser=asyncHandler(async(req,res)=>{
    const{email,password} =req.body;
    const user=await User.findOne({email})
    if(user&&(await user.matchPassword(password))){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
 })

module.exports={registerUser,authUser}