// Requirements
const express = require("express");
const router = express.Router();
const { getProduct, getProducts, addCategory } = require("./../controllers/products-controllers");
const mongoose = require("mongoose");
const Category = require("./../models/Category");

router.get("/", (request, response) => response.redirect("/products"));

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/categories", addCategory);

module.exports = router;
