import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';


const protect = asyncHandler(async (req, res, next)=>{
  let token;

  token = req.cookies.jwt;

  if(token){
    try{

      const decode = jwt.verify(token, process.env.jwt_SECRET);
      req.user = await User.findById(decode.userId).select('-password');
     
      next();

    } catch(error){
      res.status(400).send('Not authorised, Invalid token');
    }
   
  }
  else{
    res.status(400).send('Not authorised, No token');
  }

})

export default protect;
