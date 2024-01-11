const express=require("express");
const router=express.Router();
const {Viewuser, deleteuser, updateuser, Adduser}=require("../controller/Usercontroller")
router.route("/view").get(Viewuser);

router.route("/delete/:id").delete( deleteuser)
router.route("/update/:id").put( updateuser)
router.route("/add").post( Adduser)


module.exports=router;