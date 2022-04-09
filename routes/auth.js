import express from "express";
import User from "../models/User.js";
import bcryt from "bcrypt"
import { LoginValidation, RegisterValidation } from "../validation.js";
const router=express()
router.post('/register',async (req,res)=>{
  const {error}=RegisterValidation(req.body)
  if (error)
  {return res.status(400).send(error.details[0].message)}
  const CheckEmail=await User.findOne({email:req.body.email})
  if(CheckEmail){return res.status(400).send("email already exists ")}
//hash password
const SaltRounds = 10;
const HashedPassword=await bcryt.hash(req.body.password,SaltRounds)
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:HashedPassword
  })
  try{
   const saveduser=await user.save()
   res.send({user:user._id})
  }
  catch(err){
    res.send(err)
  }}
)
router.post('/login',async (req,res)=>{
  const {error}=LoginValidation(req.body)
  if (error)
  {return res.status(400).send(error.details[0].message)}
  const user=await User.findOne({email:req.body.email})
  if(!user){return res.status(400).send("email is not in daabase")}
  const validPass=await bcryt.compare(req.body.password,user.password)
  if(!validPass){return res.status(400).send("password is incorrect")}
  res.send("Logged in")
})

// router.get('/register',(req,res)=>{
//   res.send("hello")
// })
export default router
