const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },
    preco: {
      type: Number,
      required: true,
    },
    estoque: {
      type: Number,
      default: 0,
    },
    ativo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);