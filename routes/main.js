const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const usuarioController = require("../controllers/usuarioController");
const { type } = require("os");


//Rotas

router.get("/", (req, res) => {
  res.render("login", { errorMessage: '', tipo: '' });
});

router.get("/contato.ejs", (req, res) => {
  res.render("orcamento");
});

router.get("/cadastro.ejs", (req, res) => {
  res.render("cadastro", { errorMessage: '', tipo: ''});
});

router.get("/login.ejs", (req, res) => {
  res.render("login", { errorMessage: '', tipo: ''});
});


router.get("/main.ejs", ProductController.produtos_list);

router.post("/criarUsuario", usuarioController.create);
router.post("/loginUsuario", usuarioController.login);

module.exports = router;
