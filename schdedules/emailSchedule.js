const cron = require("node-cron");
const Medication = require("../models/medications");
const mailer = require("../mailers/mailers");

// console.log("Fetching medications...");

// Fetch all medication entries from the database (you can customize this query)
async function scheduleMedicationReminders() {
  try {
    const medications = await Medication.find({});

    medications.forEach((medication) => {
      // Extract hours and minutes from the schedule (assuming schedule is in HH:mm format)
      const [hours, minutes] = medication.schedule.split(":");

      // Create the cron schedule using hours and minutes
      const cronSchedule = `${minutes} ${hours} * * *`;
      // console.log(cronSchedule);

      // Schedule a cron job for each medication entry
      cron.schedule(
        cronSchedule,
        () => {
          // console.log("time reached", medication.email);
          mailer.mailer(medication.email, medication.name, medication.dosage);
        },
        {
          timezone: "Asia/Kolkata",
          scheduled: true,
        }
      );
      // console.log(medication.email);
    });

    console.log("Medication reminder emails scheduled successfully.");
  } catch (error) {
    console.error("Error scheduling medication reminder emails:", error);
  }
}

module.exports = {
  scheduleMedicationReminders,
};
