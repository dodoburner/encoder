const express = require("express");
const { coderRouter } = require("./coder");
const app = express();
const port = 5000;

const login = require("./login");

app.use(express.json());

app.use("/coder", coderRouter);

app.post("/login", login);

app.use((req, res) => {
  return res.status(404).json("Endpoint not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
