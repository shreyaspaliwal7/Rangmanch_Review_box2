// import dbConnect from "@/lib/mongodb";
// import Review from "@/models/Review";

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === "POST") {
//     try {
//       const { review, rating } = req.body;

//       if (!review || !rating) {
//         return res.status(400).json({ error: "Review and rating are required" });
//       }

//       const newReview = await Review.create({ review, rating });
//       return res.status(201).json({ success: true, data: newReview });
//     } catch (err) {
//       console.error("Error saving review:", err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   }

//   // if (req.method === "GET") {
//   //   try {
//   //     const reviews = await Review.find({});
//   //     return res.status(200).json({ success: true, data: reviews });
//   //   } catch (err) {
//   //     return res.status(500).json({ error: "Internal Server Error" });
//   //   }
//   // }

//   return res.status(405).json({ error: "Method Not Allowed" });
// }




import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { review, rating } = req.body;

      // CHANGE THIS LINE
      // Check if 'review' is an empty string and if 'rating' is a number
      if (!review || typeof rating !== 'number') {
        return res.status(400).json({ error: "Review and rating are required" });
      }

      // Check for a valid rating range if needed (e.g., between 0 and 5)
      // if (rating < 0 || rating > 5) {
      //   return res.status(400).json({ error: "Invalid rating value" });
      // }

      const newReview = await Review.create({ review, rating });
      console.log(newReview);
      return res.status(201).json({ success: true, data: newReview });
    } catch (err) {
      console.error("Error saving review:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}