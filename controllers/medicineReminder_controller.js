const Medication = require("../models/medications");
const { scheduleMedicationReminders } = require("../schdedules/emailSchedule");

module.exports.medicine = async function (req, res) {
  const newData = await Medication.find({});

  return res.render("medicine", {
    title: "Elderly Care",
    medicationData: newData,
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
    scheduleMedicationReminders();
    res.redirect("back"); // Redirect to a page displaying all medications
  } catch (error) {
    console.error("Error adding medication:", error);
    res.status(500).send("Error adding medication. Please try again later.");
  }
};

module.exports.delete = async function (req, res) {
  try {
    const Id = req.params.id;

    // Find the medicine by its unique identifier (Id) in the database
    const medicineList = await Medication.findById(Id);
    console.log(medicineList);

    if (!medicineList) {
      return res.status(404).send("medicine list not found.");
    }
    // Delete the contact from the database
    await Medication.deleteOne({ _id: Id });
    return res.status(200).redirect("back");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the medicine.");
  }
};
