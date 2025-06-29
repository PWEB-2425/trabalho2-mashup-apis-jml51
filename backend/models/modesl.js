const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: { type: String },
    password: { type: String },
    clicks:{type: Number}
});


module.exports = mongoose.model('User', UserSchema);