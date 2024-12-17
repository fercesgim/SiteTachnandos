// Requerimentos
const { Sequelize } = require("sequelize");

// Cria uma instância do Sequelize para conexão com o banco de dados SQLite
const sequelize = new Sequelize('userTable', 'user', 'user', {
  // Especifica o dialeto do banco de dados como 'sqlite'
  dialect: 'sqlite',
  // Define o arquivo SQLite onde os dados serão armazenados
  host: '.dev.sqlite'
});

// Exporta a instância `sequelize` para ser utilizada em outras partes da aplicação
module.exports = sequelize;
