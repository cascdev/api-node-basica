const mongoose = require('mongoose')

//Esquema de um documento dentro de uma coleção em uma base de dados MongoDB (Mongoose)
const usuarioSchema = new mongoose.Schema({

    nome: { type: String, required: [true, 'O campo nome é necessário'] },
    email: { type: String, unique: true, required: [true, 'O email é necessário'] },
    password: { type: String, required: [true, 'A senha é necesaria'], select: false },
    img: { type: String, required: false }
    
})

module.exports = mongoose.model('Usuario', usuarioSchema);