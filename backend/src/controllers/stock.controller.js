const stockService =
  require("../services/stock.service");

exports.getAll = (req, res) => {
  const stock =
    stockService.getStock();

  return res.json(stock);
};

exports.stockIn = (req, res) => {
  const { productId, quantity } =
    req.body;

  const stock =
    stockService.addStock(
      productId,
      quantity
    );

  return res.status(201).json(stock);
};

exports.stockOut = (req, res) => {
  const { productId, quantity } =
    req.body;

  const stock =
    stockService.removeStock(
      productId,
      quantity
    );

  if (stock === null) {
    return res.status(404).json({
      message:
        "Produto não encontrado no estoque"
    });
  }

  if (stock === false) {
    return res.status(400).json({
      message: "Estoque insuficiente"
    });
  }

  return res.json(stock);
};