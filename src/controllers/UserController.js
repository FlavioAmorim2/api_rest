import User from '../models/User'

class UserController {
  async store(req,res){
    try {
      const novoUser = await User.create(req.body)
      return res.json(novoUser)

    }catch(e) {
      // console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
  // index
  async index(req, res){
    try {
      const users= await User.findAll();
      return res.json(users)
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.json(null)
    }
  }

  // show
  async show(req, res){
    try {
      const {id} = req.params;
      const user = await User.findByPk(id);
      return res.json(user)
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.json(null)
    }
  }

  // update
  async update(req, res){
    try {
      const {id} = req.params;

      if(!req.params.id){
        return res.status(400).json({
          errors: ['MISSING ID.'],
        });
      }

      const user = await User.findByPk(id);

      if(!user){
        return res.status(400).json({
          errors: ['USUARIO NÃO ENCONTRADO'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  // ddelete
  async delete(req, res){
    try {
      const {id} = req.params;

      if(!req.params.id){
        return res.status(400).json({
          errors: ['MISSING ID.'],
        });
      }

      const user = await User.findByPk(id);

      if(!user){
        return res.status(400).json({
          errors: ['USUARIO NÃO ENCONTRADO'],
        });
      }

      await user.destroy();
      return res.json(user)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

}

export default new UserController();
