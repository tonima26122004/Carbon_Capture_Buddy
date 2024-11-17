require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import CORS middleware
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 5000;

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(cors()); // This enables all CORS requests
app.use(express.json()); // Parse incoming JSON requests

// Endpoint to handle text and image input
app.post('/api/generate-content', async (req, res) => {
  try {
    const { prompt, imagePath } = req.body;

    // Check if both prompt and imagePath are provided
    if (!prompt || !imagePath) {
      return res.status(400).send('Both prompt and image are required');
    }

    // Convert the image to base64
    const image = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString('base64'),
        mimeType: 'image/png',
      },
    };

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Call the Gemini API
    const result = await model.generateContent([prompt, image]);

    // Send the response from the API
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).send('Error generating content');
  }
});


app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});