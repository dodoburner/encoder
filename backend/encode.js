const express = require("express");
const authMiddleware = require("./middleware/authorization");
const encodeString = require("./util/encoder");

const encodeRouter = express.Router();

encodeRouter.post("/", authMiddleware, (req, res) => {
  const { inputString } = req.body;
  const regex = /^[A-Za-z]+$/;

  if (!regex.test(inputString)) {
    return res
      .status(400)
      .json("The input string must have only alphabetic charachters!");
  }

  const result = encodeString(inputString);

  return res.status(200).json(result);
});

module.exports = {
  encodeRouter,
};
