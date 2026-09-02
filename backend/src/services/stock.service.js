const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/stock.json"
);

function getStock() {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
}

function saveStock(stock) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(stock, null, 2)
  );
}

function addStock(productId, quantity) {
  const stock = getStock();

  const itemIndex = stock.findIndex(
    item => item.productId === productId
  );

  if (itemIndex >= 0) {
    stock[itemIndex].quantity += quantity;

    saveStock(stock);

    return stock[itemIndex];
  }

  const newItem = {
    productId,
    quantity
  };

  stock.push(newItem);

  saveStock(stock);

  return newItem;
}

module.exports = {
  getStock,
  addStock,
  saveStock
};