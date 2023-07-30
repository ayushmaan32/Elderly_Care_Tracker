const express = require("express");

const router = express.Router();
// console.log("router");

const medicineController = require("../controllers/medicineReminder_controller");

router.get("/", medicineController.medicine);

router.post("/addMedication", medicineController.createReminder);
// router.get("/delete/:id", medicineController.delete);

module.exports = router;
