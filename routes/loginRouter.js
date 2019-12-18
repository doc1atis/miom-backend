const express = require("express");
const requiresAuthStrategy = require("../controllers/authentication/passportConfig");
const loginAuth = require("../controllers/authentication/login");
const router = express.Router();
router.post("/", requiresAuthStrategy("local"), loginAuth);
module.exports = router;
