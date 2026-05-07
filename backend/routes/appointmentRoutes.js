const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/auth");

// Public route (client books appointment)
router.post("/", appointmentController.createAppointment);

// Admin routes (protected)
router.get("/", authMiddleware, appointmentController.getAllAppointments);
router.get("/:id", authMiddleware, appointmentController.getAppointmentById);
router.put("/:id", authMiddleware, appointmentController.updateAppointment);
router.delete("/:id", authMiddleware, appointmentController.deleteAppointment);

module.exports = router;
