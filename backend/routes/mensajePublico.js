const express = require("express");
const router = express.Router();
const MensajePublico = require("../models/MensajePublico");

// Crear mensaje
router.post("/", async (req, res) => {
  try {
    const nuevo = new MensajePublico(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(500).json({ error: "Error al crear el mensaje" });
  }
});

// Obtener todos los mensajes
router.get("/", async (req, res) => {
  try {
    const mensajes = await MensajePublico.find().populate("autor", "nombre");
    res.json(mensajes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los mensajes" });
  }
});

module.exports = router;

const mensajesRoutes = require("./routes/mensajes");
app.use("/api/mensajes", mensajesRoutes);