const stockService =
  require("../services/stock.service");

exports.getAll = (req, res) => {
  const stock =
    stockService.getStock();

  return res.json(stock);
};