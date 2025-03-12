import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both origins
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectDB();
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});