const { Schema, model } = require('mongoose');

const mensajePublicoSchema = new Schema({
  autor: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = model('MensajePublico', mensajePublicoSchema);