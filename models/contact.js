const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Number: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
