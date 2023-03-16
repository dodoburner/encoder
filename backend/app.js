const express = require("express");
const coderRouter = require("./coder");
const login = require("./login");
const port = 5000;

const app = express();

app.use(express.json());

app.use("/coder", coderRouter);

app.post("/login", login);

app.use((req, res) => {
  return res.status(404).json("Endpoint not found");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
