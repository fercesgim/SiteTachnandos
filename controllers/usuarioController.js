//Requerimentos
const express = require("express");
const Usuarios = require("../models/usuarioSchema.js");

module.exports = {
  async create(req, res) {
    //Estrutura da requisição
    const { email, senha, nome, cpf } = req.body;
    console.log(req.body);
    //Verifica se os campos não estão nulos
    if (!email || !senha || !nome || !cpf) {
      return res.render("cadastro.ejs", {
        errorMessage: "Preencha todos os campos corretamente!",
        tipo: "vermelho",
      });
    }

    try {
      // Verifica se o e-mail já existe
      const emailExistente = await Usuarios.findOne({ where: { email } });
      if (emailExistente) {
        return res.render("cadastro.ejs", {
          errorMessage: "Este e-mail já está em uso!",
          tipo: "vermelho",
        });
      }

      // Verifica se o CPF já existe
      const cpfExistente = await Usuarios.findOne({ where: { cpf } });
      if (cpfExistente) {
        return res.render("cadastro.ejs", {
          errorMessage: "Este CPF já está em uso!",
          tipo: "vermelho",
        });
      }

      // Cria o usuário
      await Usuarios.create({
        email,
        senha,
        nome,
        cpf,
      });
      //Retorna mensagem de sucesso
      return res.status(201).render("cadastro.ejs", {
        errorMessage: "Usuário criado com sucesso!",
        tipo: "verde",
      });
    } catch (error) {
      //Retorna erro caso tenha
      console.error(error);
      return res.status(500).render("cadastro.ejs", {
        errorMessage: "Erro ao criar usuário. Tente novamente mais tarde!",
        tipo: "vermelho",
      });
    }
  },

  async login(req, res) {
    const { email, senha } = req.body;
    try {
      //busca o cadastro pelo e-mail
      const user = await Usuarios.findOne({ where: { email } });
      //Verifica se  senha esta correta
      if (!user || user.senha !== senha) {
        return res.render("login", {
          errorMessage: "Usuário ou senha inválidos!",
          tipo: "vermelho",
        });
      }
      //manda para magina principal
      res.redirect("/main.ejs");
    } catch (error) {
      //Retorna erro caso tenha
      console.error(error);
      res.status(500).render("login", {
        errorMessage: "Erro ao tentar fazer login!",
        tipo: "vermelho",
      });
    }
  },
};
