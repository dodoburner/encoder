const express = require("express");
const authMiddleware = require("../middleware/authorization");
const { encode, decode } = require("../controllers/coder");

const router = express.Router();

router.use(authMiddleware);

router.post("/encode", encode);

router.post("/decode", decode);

module.exports = router;
