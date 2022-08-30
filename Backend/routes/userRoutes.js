const express=require("express")
 const router=express.Router()
 const {registerUser,authUser,allUsers}=require("../controller/userController")

//  registration
router.route('/').post(registerUser);
// authentication
 router.post("/login",authUser)
//  searching
router.route("/").get(protect, allUsers);

 module.exports=router;