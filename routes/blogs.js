import express from "express";
import mongoose from "mongoose";
import { auth } from "../middleware/VerifyToken.js";
import User from "../models/User.js";
const router=express()
router.get("/",auth,async (req,res)=>{
  var ida = mongoose.Types.ObjectId(req.user.id)

const hell=await User.findOne({_id:req.user.id
})
const name=hell.name
res.send("welcome to posts  "+name +"😊")
})
export default router
