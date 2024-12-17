import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // Get token from cookies

    if (!token) {
      return res
        .status(401)
        .json({ eroor: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    //console.log("Decoded token:", decoded);
    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized - Token Verification Failed" });
    }
    const user = await User.findById(decoded.userId).select("-password"); // Find user by id and exclude password for security
    //console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user; // Set user in request object for further use in controllers or other middlewares

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware");
    return res.status(500).json({ message: error.message });
  }
};

export default protectRoute;
