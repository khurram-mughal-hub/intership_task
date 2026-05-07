const Service = require("../models/Service");

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single service
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create service (Admin)
exports.createService = async (req, res) => {
  try {
    const { title, description, icon, price, duration, features, order } =
      req.body;

    if (!title || !description || !price) {
      return res
        .status(400)
        .json({ message: "Title, description, and price are required" });
    }

    const service = new Service({
      title,
      description,
      icon,
      price,
      duration,
      features,
      order,
    });

    await service.save();
    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update service (Admin)
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete service (Admin)
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
