import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
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

commentSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);
