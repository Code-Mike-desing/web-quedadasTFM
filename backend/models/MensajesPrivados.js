const { Schema, model } = require('mongoose');

const mensajePrivadoSchema = new Schema({
  emisor: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  receptor: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  leido: { type: Boolean, default: false }
});

module.exports = model('MensajePrivado', mensajePrivadoSchema);