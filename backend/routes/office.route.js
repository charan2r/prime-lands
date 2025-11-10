const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  createOffice,
  getAllOffices,
  getOfficeById,
  deleteOffice,
  updateOffice,
  addAgentToOffice,
  addBrokerToOffice,
} = require("../controllers/office/office.controller");

router.post("/create", authMiddleware, createOffice);
router.get("/getAll", authMiddleware, getAllOffices);
router.get("/:id", authMiddleware, getOfficeById);
router.put("/:id", authMiddleware, updateOffice);
router.delete("/:id", authMiddleware, deleteOffice);
router.post("/:id/assign-broker", authMiddleware, addBrokerToOffice);
router.post("/:id/assign-agent", authMiddleware, addAgentToOffice);

module.exports = router;
