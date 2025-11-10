const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, unique: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: String,
    country: { type: String, required: true },
  },

  geoLocation: {
    type: {
      type: String,
      enum: ["Point"],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
      index: "2dsphere",
    },
  },
  contact: {
    email: String,
    phone: String,
  },

  brokerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  agents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  establishedDate: Date,
  isActive: { type: Boolean, default: true },
  logoUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

officeSchema.index({ geoLocation: "2dsphere" });
module.exports = mongoose.model("Office", officeSchema);
