const router = require("express").Router();

const controller = require("../controllers/product.controller");
const auth = require("../middlewares/auth.middleware");

// Todas as rotas abaixo exigem token
router.use(auth);

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;