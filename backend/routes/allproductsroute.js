const express = require("express");
const allproductsroute = express.Router();
const { productModel } = require("../models/productsmodel");

allproductsroute.get("/allproducts", async (req, res) => {
  try {
    const allData = await productModel.find({});
    res.send(allData);
  } catch (error) {
    res.send({ msg: "Error occured while fetching all products" });
  }
});

allproductsroute.get("/", (req, res) => {
  res.send("All Products");
});

module.exports = { allproductsroute };
