const Office = require("../../models/Office");
const User = require("../../models/User");

// Add office
exports.createOffice = async (req, res) => {
  try {
    const { name, location, geoLocation } = req.body;

    if (!["Broker", "Admin"].includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized to create office" });
    }

    const parsedLocation =
      typeof location === "string" ? JSON.parse(location) : location;

    let parsedGeoLocation;
    if (geoLocation) {
      const parsed =
        typeof geoLocation === "string" ? JSON.parse(geoLocation) : geoLocation;
      if (parsed.coordinates && parsed.coordinates.length === 2) {
        parsedGeoLocation = {
          type: "Point",
          coordinates: parsed.coordinates,
        };
      }
    }

    const office = new Office({
      name,
      location: parsedLocation,
      geoLocation: parsedGeoLocation,
      brokeroid: req.user.id,
    });
    await office.save();
    res.status(201).json({ message: "Office created successfully", office });
  } catch (error) {
    console.error("Error creating office:", error);
    res.status(500).json({ message: "Error creating office" });
  }
};
