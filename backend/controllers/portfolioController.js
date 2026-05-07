const Portfolio = require("../models/Portfolio");

// Get all portfolio items
exports.getAllPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find().sort({ order: 1 });
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single portfolio item
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create portfolio item (Admin)
exports.createPortfolio = async (req, res) => {
  try {
    const { title, description, image, category, technologies, link, order } =
      req.body;

    if (!title || !description || !category) {
      return res
        .status(400)
        .json({ message: "Title, description, and category are required" });
    }

    const portfolio = new Portfolio({
      title,
      description,
      image,
      category,
      technologies,
      link,
      order,
    });

    await portfolio.save();
    res.status(201).json({
      message: "Portfolio item created successfully",
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update portfolio item (Admin)
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    res.status(200).json({
      message: "Portfolio item updated successfully",
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete portfolio item (Admin)
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    res.status(200).json({ message: "Portfolio item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
