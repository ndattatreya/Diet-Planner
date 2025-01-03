const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI("AIzaSyAvEuSfAA6EwVxKyqVkuO0m8bb4V_8djZw");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp", 
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("i am 18 year male with a bmi of 29.5. help me giving a diet plan for a week where each day should have 3 meals");
    console.log(result.response.text());
  }
  
  run();