import User from '../models/User'

class TokenCrontroller {
  async store(req,res){
    const {email = '', password = ''} = req.body();
    
    res.json('TA PEGAANDOO(por enquanto)')
} }

export default new TokenCrontroller();
