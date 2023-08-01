const HealthRecord = require("../models/health");
const utility = require("../utility/category");

// controller for rendering health tracker page
module.exports.healthTracker = async function (req, res) {
  try {
    const records = await HealthRecord.find({}).sort({ date: -1 });

    return res.render("health", {
      record_lists: records,
      title: "Elderly Care",
      getBloodPressureCategory: utility.getBloodPressureCategory,
      getBloodSugarCategory: utility.getBloodSugarCategory,
    });
  } catch (err) {
    console.error("Error fetching records:", err);
    return res.status(500).send("Error fetching records");
  }
};

// controller for add health records
module.exports.addHealth = async function (req, res) {
  try {
    // Extract the data from the form submission
    const {
      date,
      weight,
      bloodPressure,
      bloodSugar,
      exercise,
      sleep,
      waterIntake,
      notes,
    } = req.body;

    // Create a new HealthRecord instance
    const newRecord = new HealthRecord({
      date,
      weight,
      bloodPressure,
      bloodSugar,
      exercise,
      sleep,
      waterIntake,
      notes,
    });

    // Save the record to the database
    await newRecord.save();

    return res.redirect("back");
  } catch (err) {
    console.error("Error saving record:", err);
    return res.status(500).send("Error saving record");
  }
};
