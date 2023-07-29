const express = require("express");

const router = express.Router();
// console.log("router");

const contactController = require("../controllers/contact_controller");

router.get("/", contactController.contact);

module.exports = router;
