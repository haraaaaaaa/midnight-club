const mongoose = require("mongoose");
const Product = mongoose.model("products");
const Category = mongoose.model("categories");
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

  response.render("product-detail", {
    pageTitle: product.title,
    path: "/products",
    product,
  });
};
