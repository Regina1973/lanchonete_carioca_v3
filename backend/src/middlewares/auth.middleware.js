const { verifyToken } =
  require("../utils/jwt");

module.exports = (req, res, next) => {
  const authHeader =
    req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token não informado"
    });
  }

  const token =
    authHeader.replace("Bearer ", "");

  try {
    const decoded =
      verifyToken(token);

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token inválido"
    });
  }
};