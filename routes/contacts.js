const express = require("express");

const router = express.Router();
// console.log("router");

const contactController = require("../controllers/contact_controller");

router.get("/", contactController.contact);
router.post("/addContacts", contactController.createContact);
router.get("/delete/:id", contactController.delete);

module.exports = router;
