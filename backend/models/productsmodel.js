const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String,
  link: String,
  value: String,
  category: String,
  product: String,
  addtocart:Boolean,
  wishlist:Boolean,
  purchase:Boolean
});

const productModel = mongoose.model("jewellery", productSchema);

module.exports = { productModel };
