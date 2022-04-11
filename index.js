import mongoose from "mongoose";
import express from "express";
 import authRoute from "./routes/auth.js";
 import PostRoute from "./routes/blogs.js"
import 'dotenv/config';
const app=express()
mongoose.connect(process.env.DbConnect ,()=>{
  console.log("connected to database")
})
//Middleware
app.use(express.json())
//Routes
app.use("/api/user",authRoute)
app.use("/api/post",PostRoute)
app.listen(3000,()=>{
  console.log("connected 😊")
})
