const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const { generateToken } = require("../utils/jwt");

//Login
exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email e senha são obrigatórios"
      });
    }

    const user = userService.findByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Usuário não encontrado"
      });
    }

    const passwordMatch = bcrypt.compareSync(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Senha inválida"
      });
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    return res.json({
      success: true,
      token
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor"
    });
  }
};
// REGISTER
exports.register = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email e senha são obrigatórios"
      });
    }

    const existingUser =
      userService.findByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Usuário já existe"
      });
    }

    const hashedPassword =
      bcrypt.hashSync(password, 10);

    const newUser = {
      id: Date.now(),
      email,
      password: hashedPassword,
      role: "customer"
    };

    userService.createUser(newUser);

    return res.status(201).json({
      success: true,
      user: newUser
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor"
    });
  }
};
 userService.createUser(newUser);

  return res.status(201).json({
    success: true,
    user: newUser
  });
};