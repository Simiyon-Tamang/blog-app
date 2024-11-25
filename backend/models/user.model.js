import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
