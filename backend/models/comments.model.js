import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
  {
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Comments", commentsSchema);
