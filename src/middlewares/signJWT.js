const jwt = require('jsonwebtoken')
const globalConstants = require('../const/globalConstants')

module.exports = function (usuario) {
    
    if (usuario) {
        const token = jwt.sign({
            id: usuario.id
        },
            globalConstants.JWT_SECRET, 
            {
                expiresIn: '3000m'  // expires within 3 hs
            }
        )

        return token
        
    } else {
        return null
    }
}