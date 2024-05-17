const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  mob: String,
  email: String,
  fname: String,
  lname: String,
  pass: String,
  cpass: String,
  gender: String,
});

const userModel = mongoose.model("customer", UserSchema);

module.exports = { userModel };
