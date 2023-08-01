const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bloodPressure: {
      type: String,
      required: true,
    },
    bloodSugar: {
      type: Number,
      required: true,
    },
    exercise: {
      type: Number,
      required: true,
    },
    sleep: {
      type: Number,
      required: true,
    },
    waterIntake: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Health", healthSchema);
