const Contact = require("../models/contact");

// controller for rendering emergency contacts page
module.exports.contact = async function (req, res) {
  try {
    let contact = await Contact.find({});
    return res.render("contacts", {
      contact_lists: contact,
      title: "Elderly Care",
    });
  } catch (error) {
    console.log("Error in loading page", error);
    return;
  }
};

// controller for creating a new contact
module.exports.createContact = async function (req, res) {
  try {
    // Retrieve the data from the form submission
    const { name, phoneNumber } = req.body;

    // Create a new EmergencyContact document using the model/schema
    const newContact = new Contact({
      Name: name,
      Number: phoneNumber,
    });

    // Save the new contact to the database
    await newContact.save();
    return res.redirect("back");
  } catch (error) {
    console.log("error in creating contact", error);
    return res
      .status(500)
      .send("Error adding contact. Please try again later.");
  }
};

// controller for delete the contact
module.exports.delete = async function (req, res) {
  try {
    const Id = req.params.id;

    // Find the contact by its unique identifier (Id) in the database
    const contact = await Contact.findById(Id);

    if (!contact) {
      return res.status(404).send("contact not found.");
    }
    // Delete the contact from the database
    await Contact.deleteOne({ _id: Id });
    return res.redirect("back");
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred while deleting the file.");
  }
};
