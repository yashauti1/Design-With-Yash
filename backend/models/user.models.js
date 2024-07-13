const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
       // Allows null values to be stored without being considered duplicates
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.mobileNumber,
      email: this.email,
    },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "7d" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

const validateRegister = async (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    mobileNumber: Joi.string().required().label("Mobile Number"),
    password: passwordComplexity().required().label("Password"),
    termsAccepted: Joi.boolean().required().label("Terms Accepted"),
  });

  try {
    return await schema.validateAsync(data);
  } catch (error) {
    throw error;
  }
};

const validateLogin = async (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  try {
    return await schema.validateAsync(data);
  } catch (error) {
    throw error;
  }
};

module.exports = { User, validateRegister, validateLogin };


