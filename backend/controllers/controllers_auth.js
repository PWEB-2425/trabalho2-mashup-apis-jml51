const aluno = require('../models/models')
const session = require('express-session');

exports.get = async (req, res) => {
    const alunos = await aluno.find();
    //console.log(alunos);
    res.json(alunos);
}

exports.login=async(req, res) => {
    
    const alunos = await aluno.find(req.body);

    if(alunos[0] != null){
        console.log(`Utilizador ${req.body.nome} autenticado com sucesso.`);
        req.session.nome = req.body.nome;
        console.log(req.session)
        return res.status(200).json({ success: true }); 
    }else{
        console.log(`Falha na autenticação para o usuário ${req.body.nome}.`);
        return false
    }
};

exports.session=async(req, res) => {
    console.log({ user: {username:req.session.nome} })
    const nome = req.session.nome
    console.log(nome)
};

