const express = require("express");
const router = express.Router();
const Quedada = require("../models/Quedada");

// Crear quedada
router.post("/", async (req, res) => {
  try {
    const nueva = new Quedada(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(500).json({ error: "Error al crear la quedada" });
  }
});

// Obtener todas
router.get("/", async (req, res) => {
  try {
    const quedadas = await Quedada.find().populate("creador", "nombre");
    res.json(quedadas);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener las quedadas" });
  }
});

module.exports = router;