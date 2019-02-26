const mongoose = require('mongoose'),
    config = require('../config')

//Creamos una clase que podamos instanciar luego para conectar a la base de datos.
class Database {
    constructor() {
        this.connect()
    }

    connect() {
        mongoose.connect(process.env.URL_DB, { useNewUrlParser: true })
            .then(() => console.log(`Conexión exitosa al servidor de MongoDB: ${process.env.URL_DB}`))
            .catch(err => console.log(`Error de conexión al servidor de DB: ${err.message}`))
    }
}

module.exports = new Database()