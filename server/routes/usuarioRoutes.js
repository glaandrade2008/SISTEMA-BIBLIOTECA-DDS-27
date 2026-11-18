// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()


// ROTAS DO USUÁRIO
// CRUD

// MOSTRA A PAGINA DE CRIAR USUARIO
router.get("/cadastro", (req,res) => {
    res.send("ESTOU NA PAGINA DE CADASTRO")
})

router.get("/", (req,res) => {
    res.send("MOSTRANDO A LISTA DE USUÁRIOS")
})

// EXPORTAR O ROUTER
module.exports = router