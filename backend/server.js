const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const otpRoutes = require("./routes/otp.route");
const userRoutes = require("./routes/user.route");
const propertyRoutes = require("./routes/property.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/property", propertyRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
