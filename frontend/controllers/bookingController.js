// controllers/bookingController.js
const Booking = require("../models/booking.models");

const bookService = async (req, res) => {
    try {
        const { email, serviceName, customerNeed } = req.body;

        // Check if user is authenticated
        
        // Create new booking
        const newBooking = new Booking({
            email,
            serviceName,
            customerNeed
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports =  bookService ;
