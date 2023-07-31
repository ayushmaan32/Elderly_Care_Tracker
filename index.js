// importing Packages
const express = require("express");

const port = 8000;
const app = express();

const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const cron = require("./schdedules/emailSchedule");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./assets"));

app.use(expressLayouts);

cron.scheduleMedicationReminders();

app.use("/", require("./routes"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server :: ${port}`);
  }
  console.log(`Server is up running on :: ${port}`);
  // Schedule the email sending task when the server starts
});
