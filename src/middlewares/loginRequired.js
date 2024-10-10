import jwt from 'jsonwebtoken'
import User from '../models/User';


export default async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ['Login required']
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      }
    });

    if(!user){
      return res.status(401).json({
        errors: ['Usuario invalido']
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();

    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou invalido']
    });
  }

};



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWFnb0BnbWFpbC5jb20iLCJpYXQiOjE3MjczMTA3MzUsImV4cCI6MTcyNzkxNTUzNX0.8u9DzBQz0-AM8uYP_bLbE_d7UmTZSAMpJLib-wGK7p8
