const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sqlConnection.js");
const { userInfo } = require("os");
class User extends Model {}

User.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
sequelize,
modelName: 'usuarios',
timestamps: false
});

module.exports = User
