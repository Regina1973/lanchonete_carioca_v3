const productService =
  require("../services/product.service");

exports.getAll = (req, res) => {
  const products =
    productService.getProducts();

  res.json(products);
};

exports.create = (req, res) => {
  const { name, price, category } =
    req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price,
    category
  };

  productService.createProduct(
    newProduct
  );

  return res.status(201).json(
    newProduct
  );
};