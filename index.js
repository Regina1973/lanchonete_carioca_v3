require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes =
  require("./backend/src/routes/auth.routes");

const userRoutes =
  require("./backend/src/routes/user.routes");

const productRoutes =
  require("./backend/src/routes/product.routes");

const stockRoutes =
require("./backend/src/routes/stock.routes");

const app = express();

app.use(cors());
app.use(express.json());

// rota definitiva
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);
app.use("/api/stock", stockRoutes);
/*
Agora nao tem banco, mas quando houver

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/lanchonete");

*/

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});