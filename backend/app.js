const express = require("express");
const coderRouter = require("./coderRouter");
const login = require("./login");

const app = express();

app.use(express.json());

app.use("/coder", coderRouter);

app.post("/login", login);

app.use((req, res) => {
  return res.status(404).json("Endpoint not found");
});

module.exports = app;
