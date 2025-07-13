  const mongoose = require('mongoose');

  const alunoSchema = new mongoose.Schema({
    nome: String,
    password:String,
    clicks:Number
  });

  module.exports = mongoose.model('Aluno', alunoSchema);