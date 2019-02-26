const express = require('express'),
    config = require('./config'),
    multer = require('multer'), //multer brinda soporte para trabajar desde formularios con los metodos post y put. Tambien para subir ficheros y demas.
    upload = multer(), //inicializamos multer
    app = express(),
    router = require('./router')

app
    .set('port', process.env.PORT)
    .use(express.urlencoded({ extended: false })) //Es necesaria esta configuracion de express para codificar de manera correcta todas las peticiones para que puedan ser entregadas en formato JSON. Parsea application/xwww-form-urlencoded (peticiones via curl, postman.)
    .use(express.json()) //Este middleware interno de express permite manipular la salida de los datos en formato JSON. Parsea application/json
    .use(upload.array()) //Es necesaria para interactuar con formularios. Parsea multipart/form-data (peticiones via formulario)
    .use((req, res, next) => {
        //1ro habilitamos CORS (https://enable-cors.org)
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            //2do agregamos soporte a formularios para interactuar con todos los verbos HTTP 
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        next()
    })
    .use('/api', router) //Ruta principal de la API y definicion de todas las rutas en archivo router.

module.exports = app