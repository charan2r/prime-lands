const User = require("../../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../../config/nodemailer");

// Register a new user
exports.register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    phone,
    address,
    dateOfBirth,
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      phone,
      address,
      dateOfBirth,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (["Buyer", "Seller"].includes(user.role)) {
      return res.status(400).json({ message: "use OTP Login" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error in login" });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const resetUrl = `${
      process.env.FRONTEND_URL || "http://localhost:3000"
    }/reset-password?token=${resetToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      html: `
        <h2>Password Reset Request</h2>
        <p>Hello ${user.firstName},</p>
        <p>You requested to reset your password. Click the link below to reset it:</p>
        <a href="${resetUrl}" target="_blank">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });

    res.status(200).json({
      message: "Password reset email sent successfully",
      resetToken,
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return res
      .status(500)
      .json({ message: "Error sending password reset email" });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;
  try {
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    const userId = decoded.id;
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(userId, { password: hashedPassword });
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
