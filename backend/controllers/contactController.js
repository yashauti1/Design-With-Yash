const Contact = require("../models/contact.models");

const contact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new contact message
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
      //user: req.user || null  // Include user if available
    });

    // Save the contact message to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact created successfully.' });
  } catch (error) {
    console.error(error.message);  // Log the error for debugging purposes
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = contact;
