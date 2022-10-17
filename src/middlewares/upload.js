
module.exports = (req, res, next) =>{
    console.log("holi desde middleware upload")
    console.log(res.locals.usuario.dataValues.id)
    next()
}

