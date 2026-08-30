//rota protegida

const express = require("express");
const router = express.Router();

const authMiddleware =
  require("../middlewares/auth.middleware");

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      success: true,
      user: req.user
    });
  }
);

module.exports = router;
``