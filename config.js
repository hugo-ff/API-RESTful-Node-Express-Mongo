//Variable global que se guarda en el proceso que está ejecutando Node. Ésta en particular sirve para detectar el entorno en el que estamos ejecutando la aplicacion (desarrollo, produccion, etc.)
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//Para asignar un puerto a la aplicacion.
process.env.PORT = process.env.PORT || 3000

//Establece la URL para la conexion a la base de datos
if (process.env.NODE_ENV === 'dev') {
    process.env.URL_DB = 'mongodb://127.0.0.1:27017/maratones'
} else {
    //Ruta desde la cual Heroku va a conectarse a la base de datos remota
    process.env.URL_DB = 'mongodb://hugoff:apirestful2019@ds145389.mlab.com:45389/maratones'
}