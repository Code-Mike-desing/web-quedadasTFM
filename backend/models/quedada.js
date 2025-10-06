const mongoose = require("mongoose");

const quedadaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  fecha: { type: Date, required: true },
  lugar: { type: String, required: true },
  creador: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  asistentes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }]
});

module.exports = mongoose.model("Quedada", quedadaSchema);

