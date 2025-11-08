const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  propertyType: {
    type: String,
    enum: ["Apartment", "House", "Condominium", "Land", "Commercial"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Available", "Sold", "Rented"],
    default: "Available",
  },

  features: {
    bedrooms: Number,
    bathrooms: Number,
    area: Number,
    parking: Boolean,
    yearBuilt: Number,
  },

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

  media: {
    images: [String],
    videos: [String],
    virtualTour: String,
  },

  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  officeId: { type: mongoose.Schema.Types.ObjectId, ref: "Office" },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tags: [String],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

propertySchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Property", propertySchema);
