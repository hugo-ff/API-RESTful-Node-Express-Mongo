const mongoose = require('mongoose')
Schema = mongoose.Schema,
    CountrySchema = new Schema({
        code: {
            type: String,
            required: [true, 'El código del país es requerido'],
            unique: true
        },
        name: {
            type: String,
            required: [true, 'El nombre del país es requerido'],
            unique: true
        }
        /**
         * code _ codigo del pais. ej: mx (mexico), ar(argentina), co(colombia)
         * name _ nombre del pais
         **/
    })

module.exports = mongoose.model('Country', CountrySchema)