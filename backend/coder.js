const express = require("express");
const authMiddleware = require("./middleware/authorization");
const encodeString = require("./util/encoder");
const decodeString = require("./util/decoder");

const coderRouter = express.Router();

coderRouter.use(authMiddleware);

coderRouter.post("/encode", (req, res) => {
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

coderRouter.post("/decode", (req, res) => {
  const { encodedString } = req.body;
  const regex = /^([A-Z]\d+)+$/;

  if (!regex.test(encodedString)) {
    return res.status(400).json("The string must be a valid encoded string!");
  }

  const result = decodeString(encodedString);

  return res.status(200).json(result);
});

module.exports = {
  coderRouter,
};
