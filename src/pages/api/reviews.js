import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { review, rating } = req.body;

      if (!review || !rating) {
        return res.status(400).json({ error: "Review and rating are required" });
      }

      const newReview = await Review.create({ review, rating });
      return res.status(201).json({ success: true, data: newReview });
    } catch (err) {
      console.error("Error saving review:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // if (req.method === "GET") {
  //   try {
  //     const reviews = await Review.find({});
  //     return res.status(200).json({ success: true, data: reviews });
  //   } catch (err) {
  //     return res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }

  return res.status(405).json({ error: "Method Not Allowed" });
}
