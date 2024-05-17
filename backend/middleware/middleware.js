const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, "dipti", (err, decoded) => {
    if (err) {
      res.send({ msg: "Please Login" });
    } else {
      req.body.userID = decoded.userID;
      next();
    }
  });
};

module.exports = { Auth };
