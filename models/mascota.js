const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    especieDeMascota: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    raza: {
        type: String,
        required: [true, 'La raza es obligatorio']
    },
    color: {
        type: String,
        required: [true]
    },
    estadoAdoc:{
        type: String,
        required: [true]
    },
    edad: {
        type: String,
        required: [true, 'La edad es obligatorio']
    },
    sexo:{
        type: String,
        required: [true]
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', UsuarioSchema);
