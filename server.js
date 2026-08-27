require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectDatabase } = require("./backend/src/database");

const authRoutes = require("./backend/src/routes/auth.routes");
const userRoutes = require("./backend/src/routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

async function start() {
  await connectDatabase();

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
}

start();