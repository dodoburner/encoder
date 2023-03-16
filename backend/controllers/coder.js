const encodeString = require("../util/encodeString");
const decodeString = require("../util/decodeString");

const encode = (req, res) => {
  const { inputString } = req.body;
  const regex = /^[A-Za-z]+$/;

  if (!inputString) {
    return res.status(400).json("You must provide an input string!");
  }

  if (!regex.test(inputString)) {
    return res
      .status(400)
      .json("The input string must have only alphabetic charachters!");
  }

  const result = encodeString(inputString);

  return res.status(201).json(result);
};

const decode = (req, res) => {
  const { inputString } = req.body;
  const regex = /^([A-Za-z][1-9]){1,}$/;

  if (!inputString) {
    return res.status(400).json("You must provide an input string!");
  }

  if (!regex.test(inputString)) {
    return res.status(400).json("The string must be a valid encoded string!");
  }

  const result = decodeString(inputString);

  return res.status(201).json(result);
};

module.exports = { encode, decode };
