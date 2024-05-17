const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userID: String,
  Id: String,
  image: String,
  link: String,
  value: String,
  category: String,
  product: String,
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
