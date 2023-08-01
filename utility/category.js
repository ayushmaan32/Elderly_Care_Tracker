function getBloodPressureCategory(bloodPressure) {
  const [systolic, diastolic] = bloodPressure.split("/").map(Number);

  if (systolic <= 120 && diastolic <= 80) {
    return "Normal";
  } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    return "Elevated";
  } else if (
    (systolic >= 130 && systolic <= 139) ||
    (diastolic >= 80 && diastolic <= 89)
  ) {
    return "HYPERTENSION(Stage 1)";
  } else if (systolic >= 140 || diastolic >= 90) {
    return " HYPERTENSION (Stage 2)";
  } else if (systolic > 180 || diastolic > 120) {
    return "Hypertensive Crisis (consult your doctor immediately)";
  } else {
    return "Unknown";
  }
}

function getBloodSugarCategory(bloodSugar) {
  if (bloodSugar < 70) {
    return "Low Blood Sugar (Hypoglycemia)";
  } else if (bloodSugar >= 70 && bloodSugar <= 99) {
    return "Normal Blood Sugar";
  } else if (bloodSugar >= 100 && bloodSugar <= 125) {
    return "Prediabetes";
  } else if (bloodSugar > 125) {
    return "High Blood Sugar (Hyperglycemia)";
  } else {
    return "Unknown";
  }
}

module.exports = { getBloodPressureCategory, getBloodSugarCategory };
