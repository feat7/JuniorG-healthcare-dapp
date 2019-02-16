const express = require("express");
const router = express.Router();
const auth = require("../auth");

router.use("/users", require("./users"));

router.use("/hospital", auth.required, require("./hospital"));

router.use("/transaction", auth.required, require("./transaction"));

router.use("/patient", auth.required, require("./patient"));

module.exports = router;