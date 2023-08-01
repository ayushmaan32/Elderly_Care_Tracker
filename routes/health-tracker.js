const express = require("express");

const router = express.Router();

const healthController = require("../controllers/healthTracker_controller");

router.get("/", healthController.healthTracker);

router.post("/addHealth", healthController.addHealth);

module.exports = router;
