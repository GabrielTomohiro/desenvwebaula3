const express = require("express")
const app = express()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("projetoweb", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.TEXT
    }
})

Agendamentos.create({
    nome: "Jeferson Pereira da Silva",
    endereco: "Av Aguia de Haia, 2600",
    bairro: "Jd São Nicolau",
    cep: "7654321",
    cidade: "São Paulo",
    estado: "SP",
    observacao: "kk"
})

app.get("/", function(req, res){
    res,send("Tela inicial")
})

app.get("/cadastrar/:nome", function(req, res){
    Agendamentos.create({
        nome: req.params.nome
    })
    res.redirect("/")
})