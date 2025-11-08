const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    address: String,
    city: String,
    state: String,
    country: String,
    coordinates: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], index: "2dsphere" },
    },
  },
  brokerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  agents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Office", officeSchema);
