const nodeMailer = require("../config/nodemailer");

exports.mailer = async (email, medicationName, dosage) => {
  console.log(email);
  try {
    await nodeMailer.transporter.sendMail({
      from: "ayushmaanroy.12@gmail.com",
      to: email,
      subject: "Medication Reminder",
      text: `It's time to take your ${medicationName}.`,
      html: `<h1>Please take ${dosage} of ${medicationName} medicine .<h1>`,
    });
    console.log("Medication reminder email sent to:", email);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
