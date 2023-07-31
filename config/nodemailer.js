const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "roy082171@gmail.com",
    pass: "ngaeeniilcsvqazr",
  },
});

module.exports = {
  transporter: transporter,
};
