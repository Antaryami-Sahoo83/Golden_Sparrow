const express = require("express");
const userRoute = express.Router();
const { userModel } = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.get("/", (req, res) => {
  res.send("User Registration Portal");
});

userRoute.post("/signup", async (req, res) => {
  const { mob, email, fname, lname, pass, cpass, gender } = req.body;
  console.log(req.body);
  try {
    const findUser = await userModel.find({ email });
    console.log(findUser.length);
    if (findUser.length === 0) {
      bcrypt.hash(pass, 3, async (err, hashed_pass) => {
        if (err) {
          res.send({ msg: "error occured in hashing password", err });
        } else {
          let user = new userModel({
            mob,
            email,
            fname,
            lname,
            pass: hashed_pass,
            cpass,
            gender,
          });
          await user.save();
          res.send({ msg: "User Registered Successfully" });
        }
      });
    } else {
      res.send({ msg: "User is already Registered" });
    }
  } catch (err) {
    res.send({ msg: "Error Occurred" });
  }
});

userRoute.post("/signin", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const findUser = await userModel.findOne({ email });
    console.log(findUser);
    if (findUser) {
      bcrypt.compare(pass, findUser.pass, (err, hashed) => {
        if (hashed) {
          const token = jwt.sign({ userID: findUser._id }, "dipti");
          res.send({ msg: "Successfully Logged In", token: token });
        } else {
          res.send({ msg: "wrong credentials" });
        }
      });
    } else {
      res.send({ msg: "There was a problem logging in" });
    }
  } catch (error) {
    res.send({ msg: " in Catch" });
  }
});

module.exports = { userRoute };
