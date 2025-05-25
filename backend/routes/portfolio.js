const express = require("express");
const data = require("../data/data");

const router = express.Router();

// Endpoint para obtener información del portafolio
router.get("/portfolio", (req, res) => {
  res.json(data);
});

module.exports = router;
