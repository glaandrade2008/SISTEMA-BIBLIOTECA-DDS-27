// IMPORTANDO AS CONFIGURAÇÕES DO BANCO
const db = require("../config/db.js")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    login : () => {
        console.log("LOGIN USUARIO FUNCIONANDO");
        
    },
    // CRUD
    // CREATE
    criarUsuario: () => {
        console.log("CRIEI UM USUARIO");
        
    },

    // READ
    listarUsuarios: () => {
        console.log("TOMA AI OS USUARIOS");
        
    },

    // UPDATE
    atualizarUsuario: () => {
        console.log("ATUALIZEI UM USUÁRIO");
        
    },

    // DELETE
    deletarUsuario: () => {
        console.log("APAGUEI UM USUARIO");
        
    }

}