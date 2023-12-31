const express = require("express");

const router = express.Router();
// console.log("router");

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/contacts", require("./contacts"));
router.use("/medicine-reminder", require("./medicine"));
router.use("/health-tracker", require("./health-tracker"));

module.exports = router;
