import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    review: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
