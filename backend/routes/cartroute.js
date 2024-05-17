const express = require("express");
const cartRoute = express.Router();
const { cartModel } = require("../models/cartmodel");
const { productModel } = require("../models/productsmodel");

cartRoute.get("/", async (req, res) => {
  const userID = req.body.userID;
  try {
    const cart = await cartModel.find({ userID: userID });
    console.log(cart);
    if (cart[0].userID === userID) {
      res.send(cart);
    } else {
      res.send({ msg: "You are not authorized!" });
    }
  } catch (error) {
    res.send({ msg: "Error getting the data!" });
  }
});

cartRoute.post("/addtocart/:id", async (req, res) => {
  const Id = req.params.id;
  const userID = req.body.userID;
  try {
    const productData = await productModel.find({ _id: Id });
    const image = productData[0].image;
    const link = productData[0].link;
    const value = productData[0].value;
    const category = productData[0].category;
    const product = productData[0].product;

    const cartData = new cartModel({
      userID,
      Id,
      image,
      link,
      value,
      category,
      product,
    });

    await cartData.save();
    res.send({ msg: "Product added to cart!" });
  } catch (error) {
    res.send({ msg: "Error occured adding to cart!" });
  }
});

cartRoute.delete("/deletefromcart/:id", async (req, res) => {
  const Id = req.params.id;
  const userID = req.body.userID;
  try {
    const cartProduct = await cartModel.find({ _id: Id });
    console.log(cartProduct);
    if (cartProduct[0].userID === userID) {
      await cartModel.findByIdAndDelete(Id);
      res.send({ msg: "Product deleted from cart!" });
    }
  } catch (error) {
    res.send({ msg: "Error occured deleting!" });
  }
});

module.exports = { cartRoute };
