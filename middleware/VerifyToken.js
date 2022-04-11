import jsonwebtoken from "jsonwebtoken";
const {jsonwebtoken: jwt} = jsonwebtoken;
export const auth=(req,res,next)=>{
const token=req.header('Token')
if(!token){
  return res.status(400).send("access denied")
}
try{
const verified=jsonwebtoken.verify(token,process.env.SECRET)
req.user=verified
next()
}
catch{
  res.status(400).send("Invalid Token")
}
}

