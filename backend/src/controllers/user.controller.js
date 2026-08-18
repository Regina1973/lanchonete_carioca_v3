const userService = require("../services/user.service");

exports.getUsers = (req, res) => {
  const users = userService.getUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = req.body;

  const newUser = userService.createUser(user);

  res.status(201).json(newUser);
};