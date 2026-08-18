const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware);

router.get("/profile", (req, res) => {
  res.json({
    user: req.user
  });
});

module.exports = router;