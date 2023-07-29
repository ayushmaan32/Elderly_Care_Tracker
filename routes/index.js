const express = require("express");

const router = express.Router();
console.log("router");

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/contacts", require("./contacts"));

module.exports = router;
