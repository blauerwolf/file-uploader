const models = require('../database/models/index')
const errors = require('../const/errors')
const usuario = require('../database/models/usuario')
const { NOW, fn, Op } = require('sequelize')

module.exports = {
    listar: async (req, res, next) => {
        try{
            const usuarios = await models.usuario.findAll({
                include: [{
                    model: models.perfil,
                }]
            })

            if (usuarios.length == 0) return next(errors.SinResultadosError)

            res.json({
                sucess: true,
                data: {
                    usuarios: usuarios
                }
            })

        } catch(err) {
            return next(err)
        }    
    },
    listarInfo: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findOne({
                include: [{
                    model:models.perfil
                }],
                where: {
                    id: req.params.idUsuario
                }
            })

            if (!usuario) return next(errors.UsuarioInexistente)

            res.json({
                success: true,
                data: {
                    usuario: usuario
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    crear: async (req, res, next) => {
        try {
            const existe =  await models.usuario.findOne({
                where: {
                    [Op.and]: [
                        { email: req.body.email },
                        { deletedAt: null}
                    ]
                }
            })

            if (existe) {
                return next(errors.UsuarioAlreadyExistsError)
            }

            const perfil = await models.perfil.findOne({
                where: {
                    id: req.body.perfilId
                }
            })

            if (!perfil) return next(errors.PerfilNotFoundError)

            const usuario = await models.usuario.create(req.body)
            usuario.password = usuario.cryptPassword(usuario.password)
            await usuario.save()

            res.status(201).json({
                success: true,
                data: {
                    id: usuario.id,
                    createdAt: usuario.createdAt
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    actualizar: async (req, res, next) => {
        try {
            const existe = await models.usuario.findOne({
                where: {
                    id: req.params.idUsuario
                }
            })

            if (!existe) return next(errors.UsuarioInexistente)

            const usuario = await models.usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                perfilId: req.body.perfilId,
            }, {
                where: { id: req.params.idUsuario },
                returning: true,
                plain: true,

            })

            console.log(usuario[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idUsuario,
                    updatedAt: usuario[1].dataValues.updatedAt
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    borrar: async (req, res, next) => {
        try {
            const existe = await models.usuario.findOne({
                where: { id: req.params.idUsuario }
            })

            if (!existe) return next(errors.UsuarioInexistente)

            const usuario = await models.usuario.update({
                deletedAt: fn('NOW')
            }, {
                where: { id: req.params.idUsuario },
                returning: true,
                plain: true,
            })

            console.log(usuario[1].dataValues)

            res.json({
                success: true,
                data: {
                    id: req.params.idUsuario,
                    deletedAt: usuario[1].dataValues.deletedAt
                }
            })
            
        } catch (err) {
            return next(err)
        }
    } 
}