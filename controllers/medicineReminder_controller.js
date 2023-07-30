const Medication = require("../models/medications");

module.exports.medicine = function (req, res) {
  return res.render("medicine", {
    title: "Elderly Care",
  });
};
module.exports.createReminder = async function (req, res) {
  try {
    const { name, dosage, schedule, email } = req.body;

    const newMedication = await Medication.create({
      name,
      dosage,
      schedule,
      email,
    });
    await newMedication.save();
    res.redirect("back"); // Redirect to a page displaying all medications
  } catch (error) {
    console.error("Error adding medication:", error);
    res.status(500).send("Error adding medication. Please try again later.");
  }
};
