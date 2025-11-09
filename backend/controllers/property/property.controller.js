const Property = require("../../models/Property");
const bucket = require("../../config/firebase");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

// file upload to firebase
const uploadToFirebase = async (file, folder) => {
  const filename = `${folder}/${uuidv4()}_${file.originalname}`;
  const blob = bucket.file(filename);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on("error", reject);
    blobStream.on("finish", async () => {
      const [url] = await blob.getSignedUrl({
        action: "read",
        expires: "03-09-2030",
      });
      resolve(url);
    });
    blobStream.end(file.buffer);
  });
};

// Add property
exports.addproperty = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      price,
      propertyType,
      status,
      features,
      location,
      geoLocation,
      sellerId,
      officeId,
      agentId,
      tags,
    } = req.body;

    let media = { images: [], videos: [], virtualTour: "" };

    // upload to firebase
    if (req.files) {
      if (req.files.images) {
        media.images = await Promise.all(
          req.files.images.map((file) => uploadToFirebase(file, "images"))
        );
      }
      if (req.files.videos) {
        media.videos = await Promise.all(
          req.files.videos.map((file) => uploadToFirebase(file, "videos"))
        );
      }
      if (req.files.virtualTour) {
        const vtFile = req.files.virtualTour[0];
        media.virtualTour = await uploadToFirebase(vtFile, "virtualTours");
      }
    }

    // safely parse JSON fields if sent as strings
    const parsedFeatures =
      typeof features === "string" ? JSON.parse(features) : features;
    const parsedLocation =
      typeof location === "string" ? JSON.parse(location) : location;

    let parsedGeoLocation;
    if (geoLocation) {
      const parsed =
        typeof geoLocation === "string" ? JSON.parse(geoLocation) : geoLocation;
      if (parsed.coordinates && parsed.coordinates.length === 2) {
        parsedGeoLocation = {
          type: "Point",
          coordinates: parsed.coordinates, // [longitude, latitude]
        };
      }
    }

    // check for duplicate property
    const existingProperty = await Property.findOne({
      title,
      "location.address": parsedLocation?.address,
      "location.city": parsedLocation?.city,
    });

    if (existingProperty) {
      return res.status(400).json({
        message: "A property with the same title and address already exists.",
      });
    }

    // create property
    const property = new Property({
      title,
      description,
      price,
      propertyType,
      status,
      features: parsedFeatures || {},
      location: parsedLocation || {},
      geoLocation: parsedGeoLocation,
      sellerId,
      agentId,
      officeId,
      tags: tags ? tags.split(",") : [],
      media,
    });

    await property.save();
    res
      .status(200)
      .json({ message: "Property created successfully", property });
  } catch (error) {
    console.error("Error creating property:", error);
    res.status(500).json({
      message: "Error creating property",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const { city, status, bedrooms, propertyType, includeDeleted } = req.query;
    const query = {};

    if (city) {
      query["location.city"] = city;
    }
    if (propertyType) {
      query.propertyType = propertyType;
    }
    if (status) {
      query.status = status;
    } else if (!includeDeleted) {
      query.status = { $ne: "Not Available" };
    }
    if (bedrooms) {
      query["features.bedrooms"] = { $gte: bedrooms };
    }

    const properties = await Property.find(query);
    res.status(200).json({ message: "Properties are fetched.", properties });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching properties" });
  }
};

// Get Single Property
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate(
      "sellerId agentId officeId"
    );
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching property" });
  }
};

// Update Property
exports.updateProperty = async (req, res) => {
  try {
    const updates = req.body;
    updates.updatedAt = Date.now();

    const property = await Property.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    res.status(200).json({ message: "Property updated", property });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating property" });
  }
};

// Delete Property
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      {
        status: "Not Availble",
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json({
      message: "Property marked as not available successfully",
      property,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating property" });
  }
};
