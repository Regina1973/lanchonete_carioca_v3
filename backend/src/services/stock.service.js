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

module.exports = {
  getStock
};