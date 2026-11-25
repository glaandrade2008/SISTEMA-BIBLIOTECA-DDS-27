// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js")

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
    // LOGIN    
    login : async (req,res) => {
       try{
           // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
           const{email, senha} = req.body

            // PASSA AS INFORMAÇÕES PRO MODEL
           const usuarioLogado = await usuarioModels.login(email, senha)

           // SE NÃO TIVER USUARIO, JÁ RETORNA A PÁGINA DE ERRO
           if(!usuarioLogado){
                return res.render("erro", {erro, mensagem: "Credenciais inválidas"})
           }

           // GUARDA O USUARIO NA SESSÃO
           req.session.usuario = usuarioLogado

           // ATIVA A FUNÇÃO DE SALVAR, E GARANTE QUE TERÁ UMA SESSION
           req.session.save((erro) => {
                // SE DEU ERRO AO SALVAR INFORMA
                if(erro){
                    return res.render("erro", {erro, mensagem: "Erro ao criar sessão"})
                }

                // SE DEU CERTO REDIRECIONA
                return res.redirect("/usuarios")
           })
        }   
        catch{
            // MOSTRA O ERRRO NO TERMINAL
            console.log(erro);
            // RENDERIZA A PAGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao logar"})
            
        }             
    },
    // CRUD
    // CREATE
    criar: async (req, res) =>{
       try{
           // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
           const{nome, email, senha, perfil} = req.body

           // PASSA AS INFORMAÇÕES PRO MODEL
           await usuarioModels.criarUsuario(nome, email, senha, perfil)

           // REDIRECIONA PARA A PAGINA DE LISTA DE USUARIO
           res.redirect("/usuarios")


       }
       catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro);
            // RENDERIXA A PAGINA DE ERRO, MOSTRANDO PRO USUARIOS UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao criar o usuário"})
            
       }
    },
    // READ
    listar: (req,res) => {
        usuarioModels.listarUsuarios()
        res.send("MOSTREI A LISTA DE USUÁRIOS")   
    },
    // UPDATE
    atualizar: (req, res) =>{
        usuarioModels.atualizarUsuario()
        res.send("ATUALIZEI UM USUÁRIO")          
    },
    // DELETE
    deletar: async (req, res) => {
        try{
            // PEGAR O ID, VINDO DA URL, ATRAVES DOS PARAMETROS
            const idDaUrl = req.params.id

            // MANDA PRO MODEL O ID PRA ELE FAZER OS SERVIÇO
            await usuarioModels.deletarUsuario(idDaUrl)

            // REDIRECIONA PARA LISTA DE USUARIOS
            res.redirect("/usuarios")
        }   
        catch{
            console.log(erro);
            res.render("erro", {erro, mensagem: "Erro ao deletar o usuário"})
            
        }             
    }
}