const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const authMiddleware = require("../middleware/auth");

// Public routes
router.get("/", blogController.getAllBlogs);
router.get("/:slug", blogController.getBlogBySlug);

// Admin routes (protected)
router.get("/admin/all", authMiddleware, blogController.getAllBlogsAdmin);
router.post("/", authMiddleware, blogController.createBlog);
router.put("/:id", authMiddleware, blogController.updateBlog);
router.delete("/:id", authMiddleware, blogController.deleteBlog);

module.exports = router;
