const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  source: {
    type: String,
    enum: ["WebsiteForm", "Manual", "MLSFeed"],
    default: "WebsiteForm",
  },

  interestedProperties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  ],
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["New", "Contacted", "Qualified", "Completed", "Inactive"],
    default: "New",
  },

  notes: [String],
  communicationHistory: [
    {
      method: { type: String, enum: ["Email", "Call", "SMS", "Meeting"] },
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", leadSchema);
