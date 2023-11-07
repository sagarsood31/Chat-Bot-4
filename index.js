const express = require("express")
const OpenAI=require("openai")
const app=express()
app.use(express.json())
const openai=new OpenAI({
apiKey:"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"
})
app.get('/getResponse', async(req,res)=>{
const userPrompt=req.body.userPrompt;
    const response= await openai.chat.completions.create({
    model:'gpt-3.5-turbo',
    messages:[{"role":"user","content" : userPrompt}],
    max_tokens:100
})
console.log(response.choices[0].messages)
res.send(response.choices[0].messages)
})
app.listen (8000,()=>{
console.log("server started")
})