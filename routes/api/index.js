const express = require("express");
const router = express.Router();
const auth = require("../auth");

router.use("/users", require("./users"));

router.use("/hospital", require("./hospital"));

router.use("/transaction", require("./transaction"));

router.use("/patient", require("./patient"));

module.exports = router;