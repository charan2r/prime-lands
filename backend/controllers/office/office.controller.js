const Office = require("../../models/Office");
const User = require("../../models/Users");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

// Add office
exports.createOffice = async (req, res) => {
  try {
    const { name, location, geoLocation, contact, logoUrl, establishedDate } =
      req.body;

    if (!["Admin"].includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized to create office" });
    }

    if (!name || !location) {
      return res
        .status(400)
        .json({ message: "Name and location are required" });
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

    const officeCode = `OFF-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;

    const office = new Office({
      name,
      code: officeCode,
      location: parsedLocation,
      geoLocation: parsedGeoLocation,
      contact: contact || [],
      establishedDate: establishedDate || Date.now(),
      logoUrl: logoUrl || null,
      brokerId: null,
    });
    await office.save();
    res.status(201).json({ message: "Office created successfully", office });
  } catch (error) {
    console.error("Error creating office:", error);
    res.status(500).json({ message: "Error creating office" });
  }
};

// Get all offices
exports.getAllOffices = async (req, res) => {
  try {
    const offices = await Office.find();
    res
      .status(200)
      .json({ message: "Offices were fetched successfully", offices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching offices" });
  }
};

// Get one office details
exports.getOfficeById = async (req, res) => {
  try {
    const office = await Office.findById(req.params.id).populate(
      "brokerId agents",
      "firstName lastName email role"
    );
    if (!office) return res.status(404).json({ message: "Office not found" });
    res
      .status(200)
      .json({ message: "Office details fetched successfully", office });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching office" });
  }
};

// Update Office
exports.updateOffice = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!["Broker", "Admin"].includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized to update office" });
    }

    const updates = { name, location, updatedAt: Date.now() };
    const office = await Office.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });

    if (!office) return res.status(404).json({ message: "Office not found" });

    res.status(200).json({ message: "Office updated", office });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating office" });
  }
};

// Delete Office
exports.deleteOffice = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ message: "Only admin can remove offices" });
    }

    const office = await Office.findByIdAndUpdate(
      req.params.id,
      {
        isActive: false,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!office) {
      return res.status(404).json({ message: "Office not found" });
    }

    res.status(200).json({ message: "Office removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error removing office" });
  }
};

// Add broker to office
exports.addBrokerToOffice = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ message: "Only Admin can assign brokers" });
    }

    const { firstName, lastName, email, phone } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({
        message: "Missing required fields: firstName, lastName, email, phone",
      });
    }

    const office = await Office.findById(req.params.id);
    if (!office) {
      return res.status(404).json({ message: "Office not found" });
    }

    let broker = await User.findOne({ email });

    if (!broker) {
      const tempPassword = crypto.randomBytes(8).toString("hex");
      const hashedPassword = await bcrypt.hash(tempPassword, 10);

      broker = new User({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        role: "Broker",
        isActive: true,
      });

      await broker.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const emailOptions = {
        from: `"Prime Lands" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your Broker Account Credentials",
        html: `
          <h3>Welcome, ${firstName}!</h3>
          <p>You have been assigned as a <b>Broker</b> for office <b>${office.name}</b>.</p>
          <p><b>Login credentials:</b></p>
          <ul>
            <li>Email: ${email}</li>
            <li>Password: ${tempPassword}</li>
          </ul>
          <p>Please login at <a href="${process.env.DASHBOARD_URL}">${process.env.DASHBOARD_URL}</a> and update your password.</p>
        `,
      };

      await transporter.sendMail(emailOptions);
    }

    office.brokerId = broker._id;
    await office.save();

    broker.officeId = office._id;
    await broker.save();

    res.status(200).json({
      message: "Broker assigned and notified via email",
      office,
      broker: {
        id: broker._id,
        firstName: broker.firstName,
        lastName: broker.lastName,
        email: broker.email,
        role: broker.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error assigning broker to office",
      error: error.message,
    });
  }
};

// Add agent to office
exports.addAgentToOffice = async (req, res) => {
  try {
    if (!["Broker", "Admin"].includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Request body is empty or missing" });
    }

    const { firstName, lastName, email, phone } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({
        message: "Missing required fields: firstName, lastName, email, phone",
      });
    }

    const office = await Office.findById(req.params.id);
    if (!office) return res.status(404).json({ message: "Office not found" });

    let agent = await User.findOne({ email });

    if (!agent) {
      const tempPassword = crypto.randomBytes(8).toString("hex");
      const hashedPassword = await bcrypt.hash(tempPassword, 10);

      agent = new User({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        role: "Agent",
        officeId: office._id,
        isActive: true,
      });

      await agent.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Prime Lands" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your Agent Account Credentials",
        html: `
          <h3>Welcome, ${firstName}!</h3>
          <p>You’ve been added as an <b>Agent</b> under office <b>${office.name}</b>.</p>
          <p><b>Login credentials:</b></p>
          <ul>
            <li>Email: ${email}</li>
            <li>Password: ${tempPassword}</li>
          </ul>
          <p>Login at <a href="${process.env.DASHBOARD_URL}">${process.env.DASHBOARD_URL}</a> and change your password.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      agent.officeId = office._id;
      await agent.save();
    }

    if (!office.agents.includes(agent._id)) {
      office.agents.push(agent._id);
      await office.save();
    }

    res
      .status(200)
      .json({ message: "Agent added to office successfully", office });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding agent to office", error: error.message });
  }
};
