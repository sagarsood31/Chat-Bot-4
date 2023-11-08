const express = require("express");
const OpenAI = require("openai");
const cors = require("cors"); // Import the cors package

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const openai = new OpenAI({
    apiKey: "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",
});

app.post('/getResponse', async (req, res) => {
    const userPrompt = req.body.userPrompt;
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": userPrompt }],
        max_tokens: 100
    });
    const chatbotResponse = response.choices[0].messages;
    res.json({ chatbotResponse }); // Send response as JSON
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
