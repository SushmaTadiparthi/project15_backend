const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  roomNumber: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  price: { type: Number, required: true },
  paymentType: { type: String, required: false }
  });

module.exports = mongoose.model("Booking", bookingSchema);