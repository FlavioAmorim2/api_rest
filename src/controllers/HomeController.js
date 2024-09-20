import Aluno from '../models/Aluno'

class HomeController {
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'hiago',
      sobrenome: "amorim",
      email:'hiago@gmail.com',
      idade: 22,
      peso: 300,
      altura: 2.5,
    })
    res.json({
      novoAluno
    })
  }
}

export default new HomeController();
