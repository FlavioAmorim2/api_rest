module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('alunos', 'sobrenome', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  down: async (queryInterface, ) => {
    await queryInterface.removeColumn('alunos', 'sobrenome');
  }
};
