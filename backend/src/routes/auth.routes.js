const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// rota: POST /auth/login
router.post("/login", authController.login);

// rota: POST /auth/register
router.post("/register", authController.register);

module.exports = router;