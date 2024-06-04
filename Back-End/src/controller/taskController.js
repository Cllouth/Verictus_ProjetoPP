const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Cadastro (POST)

// Usuário

async function user(request, response) {
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha
    )

    const query = "INSERT INTO usuarios_verictus(nome, email, senha) VALUES(?,?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso!!",
                data: results
            });

        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu problemas!",
                data: err
            })
        }
    })
}

async function PostHistorico(request, response) {
    const params = Array(
        request.body.link_pesquisa,
        request.body.resultado_pesquisa,
        request.body.resultado_link_pesquisa
    )

    const query = "INSERT INTO historico(link_site, resposta, resultado_link_pesquisa) VALUES(?,?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso!!",
                data: results
            });

        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu problemas!",
                data: err
            })
        }
    })
}




// Coletando dados do usuário (GET)

// Jovem

async function getUser(request, response) {
    
    const params = Array(
        request.params.id
    )
    
    const query = "SELECT email, senha FROM usuarios_verictus WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso com GET dados!!",
                data: results,
            });

        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu problemas com GET dados!",
                data: err
            })
        }
    })
}

// Atualizando dados do usuário

// Jovem

// async function uptadeUser(request, response) {
    
//     const params = Array(
//         // request.body.ft_user,
//         request.body.nome_user,
//         request.body.idade_user,
//         request.body.email_user,
//         request.body.telefone_user,
//         request.body.cidade_user,
//         request.params.id
//     )

//     const query = "UPDATE `name` SET `name` = ?, `data_nascimento` = ?, `email` = ?, `telefone` = ?, `cidade` = ? WHERE `id` = ?;";

//     connection.query(query, params, (err, results) => {
//         if(results) {
//             response
//             .status(201)
//             .json({
//                 sucess: true,
//                 message: "Sucesso com GET dados!!",
//                 data: results,
//             });

//         } else {
//             response
//             .status(400)
//             .json({
//                 sucess: false,
//                 message: "Ops, deu problemas com GET dados!",
//                 data: err
//             })
//         }
//     })
// }


// Deletando meta Usuário Jovem (DELETE)

async function DeleteHistorico(request, response) {
    const params = Array(
        request.body.historico_deletar
    )

    const query = "DELETE FROM historico WHERE `link_site` = ?";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso com DELETE meta!!",
                data: results
            });

        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu problemas com DELETE meta!",
                data: err
            })
        }
    })
}

module.exports = {
    user,

    getUser,

    PostHistorico,
    DeleteHistorico
}