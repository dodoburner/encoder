const express = require("express");
const coderRouter = require("./routes/coder");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use("/coder", coderRouter);

app.use((req, res) => {
  return res.status(404).json("Endpoint not found");
});

module.exports = app;
