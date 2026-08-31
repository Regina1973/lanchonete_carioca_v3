const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/products.json"
);

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

function createProduct(product) {
  const products = getProducts();

  products.push(product);

  saveProducts(products);

  return product;
}

function getProductById(id) {
  const products = getProducts();

  return products.find(
    product => product.id === Number(id)
  );
}

function updateProduct(id, updatedData) {
  const products = getProducts();

  const index = products.findIndex(
    product => product.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  products[index] = {
    ...products[index],
    ...updatedData
  };

  saveProducts(products);

  return products[index];
}

function deleteProduct(id) {
  const products = getProducts();

  const filteredProducts =
    products.filter(
      product => product.id !== Number(id)
    );

  if (
    filteredProducts.length === products.length
  ) {
    return false;
  }

  saveProducts(filteredProducts);

  return true;
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};