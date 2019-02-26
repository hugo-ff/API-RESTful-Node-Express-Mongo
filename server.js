const app = require('./app'),
    db = require('./models/db')

app.listen(
    app.get('port'),
    () => console.log(`Iniciando API RESTful en el puerto ${app.get('port')}`)
)

console.log(`
    ***** VARIABLES DE ENTORNO *****

    Entorno: ${process.env.NODE_ENV}    
    Conexión DB: ${process.env.URL_DB}    
    Puerto: ${process.env.PORT}
    
    ***** VARIABLES DE ENTORNO *****`)