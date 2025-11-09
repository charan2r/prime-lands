const express = require("express");
const router = express.Router();
const {
  addproperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/property/property.controller");
const upload = require("../middleware/upload");
const { body } = require("express-validator");

const propertyValidateRules = [
  body("title").notEmpty().withMessage("Title is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("propertyType")
    .isIn(["Apartment", "House", "Condominium", "Land", "Commercial"])
    .withMessage("Invalid property type"),
  body("location").notEmpty().withMessage("Location is required"),
];

router.post(
  "/add",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 5 },
    { name: "virtualTour", maxCount: 1 },
  ]),
  propertyValidateRules,
  addproperty
);

router.get("/get-all", getAllProperties);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

module.exports = router;
