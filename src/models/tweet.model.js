import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
  {
    content: {
      type: String, //cloudinary Url
      requird: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: 0,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
