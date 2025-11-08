const OTP = require("../../models/Otp");
const User = require("../../models/Users");
const transporter = require("../../config/nodemailer");
const client = require("../../config/twilio");

// Generate random 6-digit OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const otp = generateOTP();
    await OTP.create({ userId: user.id, otp });

    try {
      // Send via email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
      });
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
    }

    try {
      // Send via sms
      if (user.phone) {
        await client.messages.create({
          body: `Your OTP is ${otp}`,
          from: process.env.TWILIO_PHONE,
          to: user.phone,
        });
        console.log("SMS sent successfully");
      } else {
        console.log("No phone number available for SMS");
      }
    } catch (smsError) {
      console.error("SMS sending failed:", smsError.message);
    }

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP sending error:", error.message);
    res.status(500).json({
      message: "Error sending OTP",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

//Verify OTP
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const otpRecord = await OTP.findOne({ userId: user.id, otp });
    if (!otpRecord) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isVerified = true;
    await user.save();
    await OTP.deleteMany({ userId: user.id });

    res.status(200).json({ message: "OTP verified successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP" });
  }
};
