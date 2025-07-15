const aluno = require('../models/models')
const session = require('express-session');

exports.get = async (req, res) => {
    const alunos = await aluno.find();
    console.log(alunos);
    res.json(alunos);
}

exports.login=async(req, res) => {
    
    const alunos = await aluno.find(req.body);

    if(alunos[0] != null){
        console.log(`Utilizador ${req.body.nome} autenticado com sucesso.`);
        req.session.user = {  username: req.body.nome };
        console.log(req.session)
        return res.status(200).json({ success: true }); 
    }else{
        console.log(`Falha na autenticação para o usuário ${req.body.nome}.`);
        return false
    }
};


exports.registar=async(req, res) => {
    
    const alunosver = await aluno.find(req.body);

    if(alunosver[0] == null){
        const alunos = new aluno(req.body);
        await alunos.save();
        res.status(201).json(aluno);
    }

};


exports.autenticado=async(req, res) => {
    if (req.session.user != null) {
        console.log("esta autenticado")
        console.log(JSON.stringify(req.session.user))
        next(); 
    } else {
        console.log("nao esta autenticado")
        res.redirect('/index.html'); 
    
    }
};  

