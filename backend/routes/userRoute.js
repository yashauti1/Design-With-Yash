const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const bookingController=require('../controllers/bookingController');
const contactController=require('../controllers/contactController');

// Route for user registration
router.post("/register", registerController);

// Route for user login
router.post("/login", loginController);

//route for booking service
router.post("/booking",bookingController);

//route for contact
router.post("/contact",contactController);



module.exports = router;
