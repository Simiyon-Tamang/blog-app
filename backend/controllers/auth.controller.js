import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  res.send("Login route");

  const { userName, password } = req.body;

  try {
    if ((!userName, !password)) {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signup = async (req, res) => {
  res.send("Signup route");

  const { fullName, userName, password } = req.body;

  try {
    if ((!fullName, !userName, !password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const user = await User.findOne({ userName });

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    if (user)
      return res
        .status(400)
        .status.json({ message: "Username already exists" });

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Internal Server Error" });
    }
  } catch (error) {}
};

export const logout = async (req, res) => {
  res.send("Logout route");
};
