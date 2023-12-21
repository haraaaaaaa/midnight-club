const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  categoryId: mongoose.Types.ObjectId,
  imgUrl: String,
});

mongoose.model("products", productSchema);
