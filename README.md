# API RESTful con Node.js, Express.js y MongoDB

_Este proyecto tiene como finalidad académica la construcción de una API RESTful usando Node.js, Express.js y MongoDB._

_Lo que hace esta API es permitir consultar, guardar, modificar, y eliminar los datos referentes a maratones deportivas que se corran en cualquier parte del mundo, permitiendo a un amante de dicha actividad armar su propio calendario de eventos._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos educativos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Para desarrollar un proyecto como éste es fundamental tener instalado Node.js_

```
https://nodejs.org/en/
```

_También es necesario tener instalado MongoDB_

```
https://www.mongodb.com/download-center/community
```

### Instalación 🔧

_Si desea reproducir el desarrollo de este proyecto es necesario instalar las siguientes dependencias:_

- Express.js
- Mongoose
- Nodemon
- Multer

1. Debe iniciar un proyecto de Node.js con el siguiente comando:

```
$ npm init
```

2. Luego instalar nodemon como dependencia de desarrollo ejecutando:

```
$ npm i -D nodemon
```

3. Y finalmente instalar mongoose, express.js y multer como dependencias del proyecto:

```
$ npm i mongoose express multer
```

_Si ha descargado este proyecto puede ahorrarse los 3 pasos anteriores ejecutando:_

```
$ npm install
```

_Para comenzar a desarrollar debe asegurarse de que esté ejecutandose el demonio de MongoDB y también será necesario levantar nuestro servidor local nodemon, ejecutando:_

```
$ nodemon server.js
```



## Ejecutando las pruebas ⚙️

_Se recomienda el uso de [POSTMAN](https://www.getpostman.com/) para probar que funcionen correctamente las operaciones CRUD._

Se debe probar:

1. La inserción de la colección de países en la DB a través de la ruta programada (/api/countries) a ejecutarse por el método POST y que va a precargar esos países.
2. La consulta a la DB de la colección de países insertada en el paso anterior a través de la ruta programada (/api/countries) a ejecutarse por el método GET.
3. Volver a ejecutar por el método POST la ruta programada (/api/countries) para insertar la colección de países, que debería devolver error dado que en el modelo de datos cada país posee algunos de sus datos que son únicos y que, por lo tanto, no pueden repetirse.
4. Agregar un nuevo maratón a través de la ruta programada (/api/marathon) a ejecutarse por el método POST para insertar un maraton en la colección de maratones de la DB. En este paso se debe probar que las validaciones de nuestro esquema de datos funcionen, es decir, no debería permitir insertar un maratón cuando no estemos enviando como mínimo los datos que marcamos como requeridos en el modelo de datos.
5. Consultar a la DB la colección de maratones insertados en el paso anterior a través de la ruta programada (/api/marathons) a ejecutarse por el método GET.
6. Consultar un único maratón a través de la ruta programada (/api/marathon/:id) a ejecutarse por el método GET.
7. Actualizar un maratón (agregando, eliminando, o modificando datos del mismo) a través de la ruta programada (/api/marathon/:id) a ejecutarse por el método PUT.
8. Eliminar un maratón a través de la ruta programada (/api/marathon/:id) a ejecutarse por el método DELETE.

_Luego se debe [habilitar el soporte a CORS](https://enable-cors.org) y hacer las mismas pruebas pero desde el front-end a través de los formularios HTML_

## Deployment 📦

_En este proyecto se ha usado [mLab](https://docs.mlab.com/) como hosting para bases de datos MongoDB. Es necesario en este punto crear una DB para el proyecto y al menos un usuario para esa base de datos, así como incluir la cadena de conexión en el archivo de configuración del proyecto._

```
process.env.URL_DB = SU_CADENA_DE_CONEXIÓN
```

_Para hacer el despliegue en Heroku es necesario primero descargar e instalar la CLI de Heroku:_

```
https://devcenter.heroku.com/articles/heroku-cli
```

_Luego se debe ejecutar el siguiente comando para loguearse en heroku:_

```
$ heroku login
```

_Heroku utiliza Git, por lo que iniciaremos un repositorio:_

```
$ git init
```

_Especificar la rama en la que se estará leyendo la aplicación ejecutada en Heroku:_

```
$ heroku git:remote -a maratones
```

_Hacer commit y push a nuestra rama de heroku master_


```
$ git add .
$ git commit -am "primer commit"
$ git push heroku master
```

_Luego de esto la API podrá ser accedida desde: https://maratones.herokuapp.com/api/_

_La colección de países puede verse en: https://maratones.herokuapp.com/api/countries_

_La colección de maratones puede verse en: https://maratones.herokuapp.com/api/marathons_

_Puede usarse POSTMAN o bien el formulario HTML desplegado en [URL del formulario] para insertar nuevos maratones, modificar un maratón existente, o bien eliminar uno. Nota: el campo "país" debe ser completado con el ID del país._

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/docs/) - Entorno de ejecución del lado del servidor
* [MongoDB](https://docs.mongodb.com/) - Para la DB
* [Express.js](https://www.npmjs.com/package/express) - Para el manejo de rutas
* [Mongoose](https://mongoosejs.com/docs/guide.html) - Para dar forma a los modelos de datos
* [Multer](https://github.com/expressjs/multer) - Para el manejo óptimo de las peticiones del tipo PUT y POST a través de formularios.
* [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli) - Para hacer el despliegue

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---

