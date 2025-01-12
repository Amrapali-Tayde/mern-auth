import jwt from 'jsonwebtoken';

const generateToken = (res, userId)=>{
  const token = jwt.sign({userId}, process.env.jwt_SECRET,{
    expiresIn: '10d'
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 10 * 24 *60 * 60 * 1000
  });
}

export default generateToken;