//  jwt token help to authorize the user in backend

const jwt=require('jsonwebtoken')

const generateToken=(id)=>{
    // generating token
return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:"60d"
})
}

module.exports=generateToken

