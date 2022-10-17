var multer = require('multer')
const globalConstants = require('../const/globalConstants')


var upload = multer({
    dest: 'uploads/archivos-usuarios/',
    limits: { fileSize: globalConstants.MAX_FILE_SIZE }
})


module.exports = function upload() {
    var upload = multer({
        dest: globalConstants.UPLOADS,
        limits: { fileSize: globalConstants.MAX_FILE_SIZE }
    })

    return (req, res, next) => {
        console.log(req.params.img)
    }
}