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

  return res.status(201).json(
    stock
  );
};