const express = require("express");
const cors = require("cors");
const futbolistasRoutes = require ("./routes/futbolistas.routes");

const app = express();
// Configurar cors
app.use(cors());

//middleware para parsear el body de las peticiones en formato JSON
app.use(express.json()); 

// rutas
app.use("/api/premios",futbolistasRoutes);

module.exports = app;

