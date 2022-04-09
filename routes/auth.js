import express from "express";
import User from "../models/User.js";
import { RegisterValidation } from "../validation.js";
const router=express()
router.post('/register',async (req,res)=>{
  const {error}=RegisterValidation(req.body)
  if (error)
  {res.status(400).send(error.details[0].message)}
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  })
  try{
   const saveduser=await user.save()
   res.send(saveduser)
  }
  catch(err){
    res.send(err)
  }}
)
// router.get('/register',(req,res)=>{
//   res.send("hello")
// })
export default router
