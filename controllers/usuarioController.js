const express = require("express");

const Usuarios = require("../models/usuarioSchema.js");

module.exports = {
  async create(req, res) {
    const { email, senha, nome, cpf } = req.body;
    console.log(req.body);

    if (!email || !senha || !nome || !cpf) {
      return res.render('cadastro.ejs', { errorMessage: 'Preencha os campos corretamente!', tipo: 'vermelho' })
    }

    const criarUsuario = await Usuarios.create({
      email,
      senha,
      nome,
      cpf,
    });
    res.status(500).render('cadastro.ejs', { errorMessage: 'Usuario criado com sucesso!', tipo: 'verde' });
  },

  async login(req, res) {
    const { email, senha } = req.body;
    try {
      const user = await Usuarios.findOne({ where: { email } });

      if (!user || user.senha !== senha) {
        return res.render('login', { errorMessage: 'Usuário ou senha inválidos!', tipo: 'vermelho' });
      }
      res.redirect("/main.ejs");
    } catch (error) {
      console.error(error);
      res.status(500).render('login', { errorMessage: 'Erro ao tentar fazer login!', tipo: 'vermelho' });
    }
  },
};
