const expres=require("express")
 const router=express.Router()

//  registration
router.route('/').post(registerUser)
 router.post('/login',authUser)

 module.exports=router;