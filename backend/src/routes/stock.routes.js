const express = require("express");
const router = express.Router();

console.log("stock.routes carregado");

const stockController =
  require("../controllers/stock.controller");

router.get(
  "/",
  stockController.getAll
);

router.post(
  "/in",
  stockController.stockIn
);

router.post(
  "/out",
  stockController.stockOut
);

module.exports = router;