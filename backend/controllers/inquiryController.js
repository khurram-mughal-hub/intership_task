const Inquiry = require("../models/Inquiry");

// Get all inquiries (Admin)
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single inquiry (Admin)
exports.getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.status(200).json(inquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create inquiry (Client)
exports.createInquiry = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        message: "Name, email, phone, service, and message are required",
      });
    }

    const inquiry = new Inquiry({
      name,
      email,
      phone,
      service,
      message,
    });

    await inquiry.save();
    res.status(201).json({
      message: "Inquiry submitted successfully",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update inquiry status (Admin)
exports.updateInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.status(200).json({
      message: "Inquiry updated successfully",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete inquiry (Admin)
exports.deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.status(200).json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
