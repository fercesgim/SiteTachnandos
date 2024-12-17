//requerimentos
const express = require("express");
const app = express();
const router = require("./routes/main");
const bodyParser = require("body-parser");
const sequelize = require("./config/sqlConnection.js");
const path = require('path');
const { DATE } = require("sequelize");

// Servir arquivos estáticos da pasta 'public'
app.use(express.static("public")); // Aqui está certo

// Configurações do bodyParser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao banco de dados
sequelize.sync().then(() => console.log('------------------------------Banco Rodando!------------------------------'));

// Configuração das rotas
app.use(router);

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Roteamento de arquivos do Bootstrap
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

// Iniciar o servidor
const port = 3030;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
