const mongoose = require("mongoose");
const Product = mongoose.model("products");
const path = require("path");
const fs = require("fs");

exports.getProducts = async (request, response) => {
  const products = await Product.find();
  response.render("index", {
    pageTitle: "Midnight Club",
    path: "/products",
    products,
  });
};

exports.getProduct = async (request, response) => {
  const { id } = request.params;

  const product = await Product.findById(id);

  const error = { message: "Not Found" };
  if (!product)
    return response.render("error", {
      pageTitle: error.title,
      path: "*",
      error,
    });

  const imagesDataPath = path.join(__dirname, "../Images");

  fs.readdir(imagesDataPath, (err, images) => {
    if (err) return res.send("Error occurred");

    const imageData = images.map((image) => image);
  });

  response.render("product-detail", {
    pageTitle: product.title,
    path: "/products",
    product,
  });
};
