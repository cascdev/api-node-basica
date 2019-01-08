var express = require('express');

var app = express();

app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensagem: 'Pedido ao servidor realizado com sucesso!'
    });

});

module.exports = app;

// Esta rota é apenas o get para a URL base, ou melhor a principal.