const express = require('express');
const router = express.Router();
const futbolistascontroller = require("../controllers/futbolistas.controller");

//endpoints REST
router.get("/", futbolistascontroller.obtenerPremios); //api/premios
router.get("/:id", futbolistascontroller.obtenerPremioPorId);
router.post("/", futbolistascontroller.crearPremio);
router.put("/:id", futbolistascontroller.actualizarPremio); 
router.delete("/:id", futbolistascontroller.eliminarPremio);

module.exports = router;



