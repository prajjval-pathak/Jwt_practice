import Joi from "joi";
export const RegisterValidation=data=>{
  const schema=Joi.object({  
    name:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
    })
  return schema.validate(data)
}
export const LoginValidation=(data)=>{
  const schema={
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
  }
  Joi.validate(data,schema)
}
