const express = require("express");
const router = express.Router();
const inquiryController = require("../controllers/inquiryController");
const authMiddleware = require("../middleware/auth");

// Public route (client submits inquiry)
router.post("/", inquiryController.createInquiry);

// Admin routes (protected)
router.get("/", authMiddleware, inquiryController.getAllInquiries);
router.get("/:id", authMiddleware, inquiryController.getInquiryById);
router.put("/:id", authMiddleware, inquiryController.updateInquiry);
router.delete("/:id", authMiddleware, inquiryController.deleteInquiry);

module.exports = router;
