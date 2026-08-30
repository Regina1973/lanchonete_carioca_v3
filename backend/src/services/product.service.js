const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/products.json"
);


function createProduct(product) {
  const products = getProducts();

  products.push(product);

  saveProducts(products);

  return product;
}

function getProducts() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function saveProducts(products) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(products, null, 2)
  );
}

module.exports = {
  createProduct,
  getProducts,
  saveProducts
};