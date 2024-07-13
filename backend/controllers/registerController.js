const bcrypt = require("bcryptjs");
const {User, validateRegister} = require("../models/user.models");

 // Import your Joi schema for validation

 const registerUser = async (req, res) => {
  try {
    const { error } = validateRegister(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { firstName, lastName, email, mobileNumber, password } = req.body;

    // Check if user with same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error); // Log detailed error for debugging
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
module.exports=registerUser;

module.exports = registerUser;
