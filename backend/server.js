import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
