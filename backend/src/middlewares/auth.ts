// src/middlewares/auth.ts

import jwt from "jsonwebtoken";

export function authMiddleware(
  req: any,
  res: any,
  next: any
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token não fornecido"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Token inválido"
    });
  }
}