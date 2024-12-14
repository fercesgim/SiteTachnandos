const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const usuarioController = require("../controllers/usuarioController");


//Rotas

router.get("/", (req, res) => {
  res.render("login.ejs");
});

router.get("/contato.ejs", (req, res) => {
  res.render("orcamento.ejs");
});

router.get("/cadastro.ejs", (req, res) => {
  res.render("cadastro.ejs");
});

router.get("/login.ejs", (req, res) => {
  res.render("login.ejs");
});

router.get("/footer.ejs", (req, res) => {
  res.render("footer.ejs");
});

router.get("/main.ejs", ProductController.produtos_list);

router.post("/criarUsuario", usuarioController.create);
router.post("/loginUsuario", usuarioController.login);

module.exports = router;
