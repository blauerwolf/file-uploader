const express = require('express')

const globalConstants = require('./const/globalConstants')
const routerConfig = require('./routes/index.routes')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    return
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init)
}

const init = () => {
    const app = express()
    configuracionApi(app)
    configuracionRouter(app)

    app.listen(globalConstants.PORT)
    console.log('La app se esta ejecutanto en el puerto: ' + globalConstants.PORT)
}

init();