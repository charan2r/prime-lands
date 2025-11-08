const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  dateTime: { type: Date, required: true },
  location: {
    address: String,
    virtualMeetingLink: String,
  },
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Cancelled"],
    default: "Scheduled",
  },
  notes: String,

  calendarSync: {
    googleEventId: String,
    synced: { type: Boolean, default: false },
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
