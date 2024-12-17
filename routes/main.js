//requerimentos
const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const usuarioController = require("../controllers/usuarioController");
const { type } = require("os");

//Rotas

// Rota para a página inicial de login
router.get("/", (req, res) => {
  res.render("login", { errorMessage: "", tipo: "" });
});

// Rota para a página de contato/orçamento
router.get("/contato.ejs", (req, res) => {
  res.render("orcamento");
});

// Rota para a página de cadastro de usuário
router.get("/cadastro.ejs", (req, res) => {
  res.render("cadastro", { errorMessage: "", tipo: "" });
});

// Rota para a página de login
router.get("/login.ejs", (req, res) => {
  res.render("login", { errorMessage: "", tipo: "" });
});

// Rota para listar produtos na página principal
router.get("/main.ejs", ProductController.produtos_list);

// Rota para criar um novo usuário (processa o formulário de cadastro)
router.post("/criarUsuario", usuarioController.create);

// Rota para login de usuário (processa o formulário de login)
router.post("/loginUsuario", usuarioController.login);

// Exporta o roteador para ser usado em outras partes do aplicativo
module.exports = router;
