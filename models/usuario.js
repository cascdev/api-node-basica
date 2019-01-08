var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

// Nossa variável enum
var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} nao eh permitido'
};


//Esquema de um documento dentro de uma coleção em uma base de dados MongoDB (Mongoose)
var usuarioSchema = new Schema({

    nome: { type: String, required: [true, 'O campo nome é necessário'] },
    email: { type: String, unique: true, required: [true, 'O email é necessário'] },
    password: { type: String, required: [true, 'A senha é necesaria'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} deve ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);