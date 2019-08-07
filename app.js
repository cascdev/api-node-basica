// Requires
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Inicializar variáveis
const app = express()

// Configurações do Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rotas
const appRoutes = require('./routes/app');
const usuarioRoutes = require('./routes/usuario')


// Definir as Rotas que serão usadas na aplicação (As rotas aqui devem estar importadas acima)
app.use('/', appRoutes)
app.use('/usuario', usuarioRoutes) //!!!!!PROBLEMAS COM ESSA ROTA

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true) // unique do models
// Conexão com base de dados do mongoose, habilita os models e métodos
mongoose.connect('mongodb://localhost:27017/novaApiBasica',{ useNewUrlParser: true})
    .then(()=>{
        console.log('Conectado com sucesso ao MongoDB')   
        
    }).catch(err => {
        console.log('O Banco Mongo NÃO foi conectado.')
        process.exit()
      })
  

// Ouvindo petições ao servidor
port = 3000
app.listen(port, () => {
    console.log(`Express server rodando na porta ${port}: \x1b[32m%s\x1b[0m`, 'online')
})

  