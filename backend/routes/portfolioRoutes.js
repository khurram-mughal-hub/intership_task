const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");
const authMiddleware = require("../middleware/auth");

// Public routes
router.get("/", portfolioController.getAllPortfolio);
router.get("/:id", portfolioController.getPortfolioById);

// Admin routes (protected)
router.post("/", authMiddleware, portfolioController.createPortfolio);
router.put("/:id", authMiddleware, portfolioController.updatePortfolio);
router.delete("/:id", authMiddleware, portfolioController.deletePortfolio);

module.exports = router;
