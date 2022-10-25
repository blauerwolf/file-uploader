const models = require('../database/models/index')
const errors = require('../const/errors')
const globalConstants = require('../const/globalConstants')
const { NOW, fn, Op } = require('sequelize')

const crypto = require('crypto');
const fs = require('fs');

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
                    model: models.perfil,
                    model: models.archivo_usuario,
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

	    // Solo el admin puede cambiar los parámetros de otros usuarios.
            if (
                res.locals.usuario.dataValues.id !== req.params.idUsuario &&
                res.locals.usuario.dataValues.perfilId != 1
            ) {
                return next(errors.AccionNoPermitida)
            }

	    // Un usuario regular no puede cambiarse su propio perfil
	    if (
		req.body.perfilId !== undefined &&
		res.locals.usuario.dataValues.id === req.params.idUsuario
	    ) {
		return next(errors.AccionNoPermitida)
	    }

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
                password: req.body.password,
            }, {
                where: { id: req.params.idUsuario },
                returning: true,
                plain: true,

            })

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

            if (res.locals.usuario.dataValues.id === req.params.idUsuario) {
                return next(errors.AccionNoPermitida)
            }

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
    },
    subirArchivo: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findOne({
                where: {
                    id: res.locals.usuario.dataValues.id
                }
            })

            if (!usuario) return next(errors.UsuarioInexistente)

            for (const archivo of req.files) {

                const ar = await models.archivo_usuario.findOne({
                    where: {
                        usuarioId: res.locals.usuario.dataValues.id,
                        original_name: archivo.originalname
                    }
                })

                const fileBuffer = fs.readFileSync(archivo.path)
                const hashSum = crypto.createHash('sha256')
                hashSum.update(fileBuffer)
                const sha256 = hashSum.digest('hex')
                //const base64 = hashSum.digest('base64')

                if (!ar) {

                    const archivoDB = await models.archivo_usuario.create({
                        //nombre: req.body.nombre,
                        file: archivo ? archivo.filename : null, 
                        original_name: archivo.file ? archivo.originalname : null,
                        usuarioId: res.locals.usuario.dataValues.id,
                        size: archivo.size,
                        sha256: sha256,
                    })
                }
            }

            var mensaje = "Archivo cargado."
            if (req.files.length > 1) {
                mensaje = "Archivos cargados."
            }


            res.status(201).json({
                success: true,
                data: {
                    message: mensaje
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    descargarArchivo: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findOne({
                where: {
                    id: res.locals.usuario.dataValues.id
                }
            })

            if (!usuario) return next(errors.UsuarioInexistente)

            const archivo = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: res.locals.usuario.dataValues.id,
                    nombre: req.body.nombre,
                }
            })

            if (!archivo) return next(errors.ArchivoInexistente)

            res.download('uploads/archivos-usuarios/' + archivo.file, archivo.original_name)

        } catch (err) {
            return next(err)
        }
    },
}
