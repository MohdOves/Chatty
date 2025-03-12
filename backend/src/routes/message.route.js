import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js"; // Add .js extension
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js"; // Add sendMessage import

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage); // Add sendMessage route

export default router;