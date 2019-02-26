const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    MarathonSchema = new Schema({
        name: {
            type: String,
            required: [true, 'El nombre del maratón es requerido']
        },
        country: {
            type: Schema.Types.ObjectId,
            ref: 'Country',
            required: [true, 'El país donde se realiza el maratón es requerido']
        },
        location: {
            type: String,
            required: [true, 'El lugar donde se realiza el maratón es requerido']
        },
        altitude: Number,
        race_web: {
            type: String,
            lowercase: true
        },
        race_logo: String,
        race_since: String,
        race_day: String,
        race_date: Date,
        race_type: {
            type: String,
            enum: ['City', 'Trail'],
            default: 'City'
        },
        distance: {
            type: Number,
            min: 42.195,
            default: 42.195
        },
        resume: String

        /** 
         * name _ nombre del maraton
         * country _ id del pais donde se corre (el id viene de un catalogo de paises alojado en otro schema)
         * location _ ciudad o lugar donde se corre
         * altitude _ altitud a la que esta el circuito donde se corre la marathon
         * race_web _ web del marathon
         * race_logo _ url del logo
         * race_since _ año desde el que se corre la marathon
         * race_day _ que dia se corre. ej: "el ultimo domingo de agosto"
         * race_date _ fecha en que cae ese dia este año actual
         * race_type _ que tipo de marathon es. por ej: normal, de montaña, etc.
         * distance _ distancia total del circuito. ej: una marathon standar tiene 42km
         * resume _ pequeña ficha tecnica del marathon en cuestion
         **/
    })

//mongodb pluraliza y pone en minusculas el nombre del modelo
module.exports = mongoose.model('Marathon', MarathonSchema)