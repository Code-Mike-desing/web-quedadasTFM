const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB")
  .catch(err => console.error("❌ Error de conexión:", err));

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Servidor backend activo en el puerto ${PORT});
});