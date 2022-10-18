const errors = require('../const/errors')
const multer = require("multer");

module.exports = function (err, req, res, next) {
    let response = {
        success: false,
        error: {
            code: err.code || 500,
            message: err.message || 'Internal Server Error'
        }
    }

    if (err.isJoi) {
        let validationErrorType = err.details[0].type 
        let errorKey = 'ValidationError'
        if (validationErrorType === 'any.required') {
            errorKey = 'FaltanCamposError'
        }
        err.response = 400
        response.error.code = errors[errorKey].code
        response.error.message = errors[errorKey].message
    }


    if (err.message === 'Not Found') {
        err.response = 404
        response.error.code = 404
        response.error.message = 'Not Found'
    }

    if (err.message === 'No encontrado') {
        err.response = 404
        response.error.code = 404
        response.error.message = 'No encontrado'
    }

    if (err.message === 'Not allowed by CORS') {
        err.response = 403
        Response.error.code = 403
    }

    if (err.message === 'Formato no permitido.') {
        err.response = 409
        response.error.code = 409
        response.error.message = 'Formato no permitido.'
    }

    if (err.message === 'El archivo ya se encuentra en el repositorio.') {
        err.response = 409
        response.error.code = 409
        response.error.message = 'El archivo ya se encuentra en el repositorio.'
    }

    if (err.name === 'SequelizeValidationError') {
        err.response = 400
        let validationError = err.errors[0]
        response.error.code = errors['ValidationError'].code 
        response.error.message = validationError.message
    }

    if (err.name === 'SequelizeDatabaseError' && err.message.indexOf('out of range') >= 0) {
        err.response = 400
        response.error.code = errors['ValidationError'].code
        response.error.message = errors['ValidationError'].message
    }

    if (err.name === 'SequelizeConnectionError') {
        err.response = 500
        response.error.code = 500
        response.error.message = 'Internal Server Error'
    }

    if (response.error.code === 500) {
        err.response = 500
    }

    if (err.statusCode == 400) {
        err.response = 400
    }

    
    if (err.name === 'MulterError') {
        err.response = 400
        response.error.code = 400
        if (err.message === 'Unexpected field') {
            response.error.message = 'Campo jpg con el archivo inexistente.'
        } else {
            response.error.message = err.message
        }
    }

    console.log('MENSAJE DEL ERROR: ' + err.message)
    console.log(err)
    res.status(err.response).json(response)
}