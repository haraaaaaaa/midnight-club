const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  categoryId: mongoose.Types.ObjectId,
  imgUrl: String,
});

mongoose.model("products", productSchema);
