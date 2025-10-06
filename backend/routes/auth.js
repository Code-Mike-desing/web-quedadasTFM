const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

// Ruta para registrar usuario
router.post('/registro', async (req, res) => {
  try {
    const { nombre, email, password, edad, intereses } = req.body;

    // Verificar si el usuario ya existe
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'El correo ya está registrado' });

    // Encriptar contraseña
    const hash = await bcrypt.hash(password, 10);

    // Crear usuario
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: hash,
      edad,
      intereses
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });

  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el registro', error });
  }
});

module.exports = router;