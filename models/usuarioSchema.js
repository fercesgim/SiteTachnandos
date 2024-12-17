//Requerimentos
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sqlConnection.js");
const { userInfo } = require("os");

// Define a classe User, que estende a classe Model do Sequelize
class User extends Model {}

// Inicializa o modelo User com os campos e configurações para a tabela
User.init({
  // Definição do campo 'nome' 
  nome: {
    type: DataTypes.STRING,  
    allowNull: false,        
  },
  // Definição do campo 'cpf' 
  cpf: {
    type: DataTypes.STRING,  
    allowNull: false,        
  },
  // Definição do campo 'email' 
  email: {
    type: DataTypes.STRING,  
    allowNull: false,        
  },
  // Definição do campo 'senha' 
  senha: {
    type: DataTypes.STRING,  
    allowNull: false,        
  },
}, {
  // Configurações adicionais para o modelo
  sequelize,                
  modelName: 'usuarios',    
  timestamps: false          
});

// Exporta o modelo User para ser utilizado em outras partes do aplicativo
module.exports = User;

