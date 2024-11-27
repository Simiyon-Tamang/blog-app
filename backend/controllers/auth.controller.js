import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { fullName, userName, password, confirmPassword, gender } = req.body;

  try {
    if (!fullName || !userName || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
    });

    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        // profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ userName });
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      // profilePic: user.profilePic,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in Logout controller");
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
