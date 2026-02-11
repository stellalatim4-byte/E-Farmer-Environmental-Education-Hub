
import { GoogleGenAI } from "@google/genai";

export const getAgriculturalAdvice = async (query: string, language: string) => {
  // Safety check: ensure API key exists before initialization to prevent crash
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key missing. AI Assistant will be in standby mode.");
    return "I am currently disconnected from the village network. Please check back later or use our E-Library guides.";
  }

  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User language: ${language}. Question: ${query}`,
      config: {
        systemInstruction: `You are Aki, the E-Farmer AI Advisor. 
        Focus: Northern Uganda (Gulu) and the Savanna region.
        
        CRITICAL GUIDELINES:
        1. LOCAL RELEVANCE: Provide advice based on Acholi soil types, local rain seasons, and specific crops like Simsim, Shea, Maize, and Coffee.
        2. SIMPLICITY: Use short sentences. Avoid jargon. Use analogies related to village life.
        3. HUMAN-IN-THE-LOOP: If a question is complex (e.g., major livestock disease), suggest they "Talk to a Village Extension Officer" and provide general first-aid steps.
        4. CLIMATE ADAPTATION: Reference UNFCCC Article 7 goals in a way that makes sense (e.g., "planting trees to protect your soil from heavy rain").
        5. MULTILINGUAL: If the query is in Acholi, Luganda, or Swahili, respond in that language.`,
        temperature: 0.6,
      },
    });
    return response.text || "I processed your request but couldn't generate a clear answer. Try rephrasing.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am resting my ears. Please try again soon, or check the E-Library for written guides.";
  }
};
