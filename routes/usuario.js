const express = require ('express')
const router = express.Router()

const Usuario = require('../models/usuario')

module.exports = router

// Consertar tudo isto



// ==========================================
// Obter todos os usuarios
// ==========================================
router.get('/', (_req, res) => {

    Usuario.find({}, 'nome email img role')
        .exec(
            (err, usuarios) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensagem: 'Error carregando usuario',
                        errors: err
                    })
                }

                res.status(200).json({
                    ok: true,
                    usuarios: usuarios
                })
            })

})

// ==========================================
// Atualizar usuário
// ==========================================
router.put('/:id', (req, res) => {

    var id = req.params.id
    var body = req.body

    Usuario.findById(id, (err, usuario) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensagem: 'Erro ao buscar usuário',
                errors: err
            })
        }
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                mensagem: 'O usuario com o id ' + id + ' não existe',
                errors: { message: `Não existe um usuário com o ID: ${id}`}
            })
        }
        usuario.nome = body.nome
        usuario.email = body.email
        usuario.role = body.role

        usuario.save((err, usuarioGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensagem: 'Error ao atualizar usuario',
                    errors: err
                })
            }
            usuarioGuardado.password = ':)'

            res.status(200).json({
                ok: true,
                usuario: usuarioGuardado
            })

        })

    })

})

// ==========================================
// Criar um usuário
// ==========================================
router.post('/', (req, res) => {

    let body = req.body

    let usuario = new Usuario({
        nome: body.nome,
        email: body.email,
        password: body.password,
        img: body.img
    })
    usuario.save((err, usuarioGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensagem: 'Erro ao criar usuário',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            usuario: usuarioGuardado,
            usuariog: req.usuario
        })

    })

})

// ============================================
//   Deletar/Excluir um usuário pelo seu id
// ============================================
router.delete('/:id',(req, res) => {

    let id = req.params.id

    User.findByIdAndRemove(id, (err, usuarioExcluido) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensagem: `Erro ao excluir o usuário de ID: ${id}`,
                erros: err
            })
        }
        if (!usuarioExcluido) {
            return res.status(400).json({
                ok: false,
                mensagem: `Não existe um usuário com ID: ${id}`,
                erros: { message: `Não existe um usuário com ID: ${id}` }
            })
        }
        res.status(200).json({
            ok: true,
            usuario: usuarioExcluido
        })

    })
})


module.exports = router