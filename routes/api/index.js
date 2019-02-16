const express = require("express");
const router = express.Router();
const auth = require("../auth");

router.use("/users", require("./users"));

module.exports = router;