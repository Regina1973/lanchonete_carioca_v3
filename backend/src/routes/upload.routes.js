const router = require("express").Router();
const upload = require("../middlewares/upload");
const cloudinary = require("../config/cloudinary");

router.post("/image", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: "lanchonete" },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error });
        }

        res.json({
          url: result.secure_url
        });
      }
    );

    result.end(req.file.buffer);

  } catch (err) {
    res.status(500).json({ error: "Erro no upload" });
  }
});

module.exports = router;