import { GoogleGenAI, Chat } from "@google/genai";

export const createChatSession = (): Chat => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are a helpful, encouraging, and knowledgeable PCMB + CS Tutor for Pre-University (high school) students. 
      Your goal is to explain complex scientific concepts simply.
      - Use analogies.
      - If a student asks about a lab experiment (Physics, Chem, Bio), explain the theory and safety precautions.
      - For Math and CS, provide step-by-step logic.
      - Keep responses concise but complete.
      - Be friendly and use emojis occasionally to keep the mood light.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};