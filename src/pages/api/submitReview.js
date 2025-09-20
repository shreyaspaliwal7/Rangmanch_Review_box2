// pages/api/submitReview.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Replace with your GAS Web App deployed URL
      const GAS_URL = "https://script.google.com/macros/s/AKfycbyxV_yvy2aO4qT5yjUjWKxNCOhrJiTk0aQvxJwLf87kKWKe9wdSJclh-3eGT_BKBuG_/exec";

      const response = await axios.post(GAS_URL, req.body, {
        headers: { "Content-Type": "application/json" },
      });

      res.status(200).json(response.data);
    } catch (err) {
      console.error("Error sending to GAS:", err.message);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}



