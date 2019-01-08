// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variáveis
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rotas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// Conexão com base de dados do mongoose, habilita os models e métodos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    
    if (err) throw err;
    console.log('Base de dados: \x1b[32m%s\x1b[0m', 'online');

});

// Definir as Rotas que serão usadas na aplicação (As rotas aqui devem estar importadas acima)
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// Ouvindo petições ao servidor
app.listen(3000, () => {
    console.log('Express server rodando na porta 3000: \x1b[32m%s\x1b[0m', 'online');
});