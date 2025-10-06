const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));



require('./db'); // Conexión
const express = require('express');
const app = express();

app.use(express.json());

const rutaAuth = require('./routes/auth');
app.use('/api', rutaAuth);  // Acceso desde /api/registro

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});