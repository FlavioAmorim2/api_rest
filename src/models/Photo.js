import Sequelize, {Model} from 'sequelize';

export default class Photo extends Model {
  static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue:'',
        validate: {
         notEmpty: {
            msg: 'Campo obrigatório'
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue:'',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório'
          },
        },
      },
    }, {
      sequelize,
      tableName: 'photo',
    })
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
