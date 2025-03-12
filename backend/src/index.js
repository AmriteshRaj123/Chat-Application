import express from "express";
import authRoutes from "./routes/auth.js"; // Ensure path is correct
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.routes.js"

dotenv.config()
const PORT = process.env.PORT

const app = express();

// Middleware
app.use(express.json());

// Cookie-parser
// app.use(cookieParser.json());

// Routes
// app.use("/api/auth", authRoutes);
// //message
// app.use("/api/message", messageRoutes);

// app.get("/", (req, res) => {
//     res.send("Server is running successfully!");
// });

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    connectDB();
});