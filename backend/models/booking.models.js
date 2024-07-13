
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    customerNeed: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
