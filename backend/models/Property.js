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
    enum: ["Available", "Pending", "Sold", "Rented", "Not Available"],
    default: "Pending",
  },

  features: {
    bedrooms: Number,
    bathrooms: Number,
    area: Number,
    parking: Boolean,
    yearBuilt: Number,
  },

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

propertySchema.index({ geoLocation: "2dsphere" });

module.exports = mongoose.model("Property", propertySchema);
