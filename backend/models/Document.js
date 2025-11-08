const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "Contract",
      "Disclosure",
      "InspectionReport",
      "OfferLetter",
      "FinancialStatement",
      "Other",
    ],
    default: "Other",
  },
  fileUrl: { type: String, required: true },

  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  relatedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  version: { type: Number, default: 1 },
  accessLogs: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      accessedAt: { type: Date, default: Date.now },
    },
  ],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Document", documentSchema);
