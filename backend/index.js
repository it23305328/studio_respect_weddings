import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;
const TO_NUMBER = process.env.TO_NUMBER;

// 📩 WhatsApp Notification API
app.post("/send-whatsapp", async (req, res) => {
  try {
    const data = req.body;

    const messageText = `
📌 *New Reservation Submission*

👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}

📅 Date: ${data.date}
📍 Venue: ${data.venue}

🛠 Service Type: ${data.serviceType}
⏰ Time: ${data.time}
🎨 Style: ${data.style}
📣 Hear About Us: ${data.hearAbout}

📝 Notes:
${data.notes || "No additional notes"}

✔ Saved in Firebase
✔ Email Sent 
✔ WhatsApp Alert Delivered
    `;

    const url = `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`;

    await axios.post(
      url,
      {
        messaging_product: "whatsapp",
        to: "94765770018",
        type: "text",
        text: { body: messageText }
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ success: true, message: "WhatsApp notification sent!" });

  } catch (error) {
    console.error("WhatsApp Error:", error.response?.data || error);
    res.status(500).json({ error: "Failed to send WhatsApp message" });
  }
});

// 🚀 Start Server
app.listen(4000, () => {
  console.log("WhatsApp Server running on port 4000");
});
