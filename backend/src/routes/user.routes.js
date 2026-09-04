//rota protegida

const express = require("express");
const router = express.Router();

const authMiddleware =
  require("../middlewares/auth.middleware");

const userController =
  require("../controllers/user.controller");

router.get(
  "/",
  userController.getUsers
);

router.post(
  "/",
  userController.createUser
);

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