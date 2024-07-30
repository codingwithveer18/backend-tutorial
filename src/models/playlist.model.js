import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: 0,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
        default: 0,
      },
    ],
  },
  { timestamps: true }
);
export const Playlist = mongoose.model("Playlist", playlistSchema);
