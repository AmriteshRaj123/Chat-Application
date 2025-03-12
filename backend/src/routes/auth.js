import express from "express";
import {updateProfile} from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Signup Route
router.get("/signup", (req, res) => {
    res.send("Signup route");
});

// // Login Route (Fixed Error)
router.post("/login", (req, res) => {
    res.send("Login successful");
});

// // Logout Route
router.get("/logout", (req, res) => {
    res.send("Logout route");
});

router.put("/update-profile",updateProfile);

router.get("/check",protectRoute,updateProfile);

export default router;

