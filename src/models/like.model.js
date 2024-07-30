import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: 0,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      default: 0,
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: 0,
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
      default: 0,
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
