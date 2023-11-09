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
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content":userPrompt}],
        "max_tokens": 512,
        "top_p": 1,
        "temperature": 0.5,
        "frequency_penalty": 0,
        "presence_penalty": 0
    });
    const chatbotResponse = response.choices[0].message.content;
    res.status(200).json({ chatbotResponse }); // Send response as JSON
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
