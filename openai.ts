// Main code for me ------------------------------------
// import OpenAI from "openai";

// console.log("API KEY CHECK:", process.env.AI_API_KEY ? "✅ FOUND" : "❌ NOT FOUND");

// const openai = new OpenAI({
//   apiKey: process.env.AI_API_KEY,
// });

// export default openai;

// -----------------------------------------------
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.AI_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1", // 🔥 IMPORTANT
// });

// export default openai;

import OpenAI from "openai";

console.log("API KEY CHECK:", process.env.AI_API_KEY ? "✅ FOUND" : "❌ NOT FOUND");

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default openai;