const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ⭐ CORS FIX — allow Next.js frontend
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

app.use(bodyParser.json());

// Load Google service account key
const serviceAccount = require(`./${process.env.GOOGLE_KEY_FILE}`);

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const sheetName = process.env.GOOGLE_SHEET_NAME;

app.post("/api/submit-form", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A1:E1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, phone, message]],
      },
    });

    res.status(200).json({ success: true, message: "Saved successfully" });
  } catch (error) {
    console.error("Google Sheets Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
