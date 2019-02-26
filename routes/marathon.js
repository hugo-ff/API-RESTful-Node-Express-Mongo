const Marathon = require('../models/marathon')

const apiResponse = (req, res, err, data) => {
    if (err) {
        res.status(500).send({
            message: `Error interno del servidor. ${err.message}`
        })
    } else {
        if (data) {;
            res.status(200).send({ data })
        } else {
            res.status(404).send({
                message: `No existen datos en el API con tus parámetros de búsqueda.`
            })
        }
    }
}

//Lectura
const getMarathons = async(req, res) => {
    await Marathon
        .find({})
        .populate('country', 'name code') //método de mongoose para realizar subconsultas (lo que sería un INNER JOIN en SQL). En este caso se usa para mostrar toda la información de país ademas del id cuando consultamos los maratones. En el primer parámetro señalamos el schema de donde va a hacer la subconsulta, y en el segundo parámetro los nombres de los atributos que quiero traer en la subconsulta. Siempre traera además aquel atributo que sea la clave principal del documento, que en este caso es el id del país.
        .sort({ '_id': -1 })
        .exec((err, data) => apiResponse(req, res, err, data))
}

//Escritura
const postMarathon = async(req, res) => {
    let marathon = new Marathon(req.body)
    console.log(req.body)
    await marathon.save((err, data) => apiResponse(req, res, err, data))
}

//Edicion
const getMarathon = async(req, res) => {
    await Marathon
        .findById(req.params.id)
        .exec((err, data) => apiResponse(req, res, err, data))
}
const putMarathon = async(req, res) => {
    await Marathon
        .findByIdAndUpdate(
            req.params.id,
            req.body, { new: true },
            (err, data) => apiResponse(req, res, err, data)
        )
}

//Borrado
const deleteMarathon = async(req, res) => {
    await Marathon
        .findByIdAndRemove(
            req.params.id,
            (err, data) => apiResponse(req, res, err, data)
        )
}

module.exports = {
    getMarathons,
    postMarathon,
    getMarathon,
    putMarathon,
    deleteMarathon
}