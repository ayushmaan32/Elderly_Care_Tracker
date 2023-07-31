const express = require("express");

const router = express.Router();
console.log("router medicine");

const medicineController = require("../controllers/medicineReminder_controller");

router.get("/delete/:id", medicineController.delete);
router.get("/", medicineController.medicine);

router.post("/addMedication", medicineController.createReminder);

module.exports = router;
