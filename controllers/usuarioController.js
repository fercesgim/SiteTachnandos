const express = require("express");

const Usuarios = require("../models/usuarioSchema.js")

module.exports = {
async create (req, res) {



    const { email, senha, nome, cpf } = req.body;
    console.log(req.body);

    if (!email || !senha || !nome || !cpf) {
      return res.status(400).json({ error: "Necessario e-mail/ senha" });
    }

    const criarUsuario = await Usuarios.create({
      email,
      senha,
      nome,
      cpf
    });

    return res.redirect("login.ejs");
  },

  async login (req, res) {
    const { email, senha } = req.body;
  
    try {
      const user = await Usuarios.findOne({ email });
  return res.json(user)
      if (!user || user.senha !== senha) {
        res.render("../views/cadastro.ejs");
      }
       res.redirect("/main.ejs");
    } catch (error) {
      console.error(error);
      res.status(500)
    }
  
  },
};











