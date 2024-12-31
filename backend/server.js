import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from "./routes/comment.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/auth", postRoutes);
app.use("/api/auth", commentRoutes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

{
  /*console.log("Public Key:", process.env.IK_PUBLIC_KEY);
console.log("Private Key:", process.env.IK_PRIVATE_KEY);
console.log("URL Endpoint:", process.env.IK_URL_ENDPOINT);
*/
}
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
