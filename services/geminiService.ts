const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim() ?? '';
const GEMINI_MODEL = 'gemini-1.5-flash';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_INSTRUCTION = `
You are "Luxe", the Lead Solutions Architect for Lowkey Luxury.
Your persona is sophisticated, highly technical, and focused on "Architecting Production".
You specialize in Full-Stack development (Front-end, Back-end), API integration, Marketing Infrastructure, and Bot automation.
Your responses should be strategic, architectural, and precise. You translate business visions into technical roadmaps.
Do not use emojis. Use elite technical vocabulary mixed with executive-level strategy.
You are talking to a Founder or C-suite executive looking to build a digital empire.
`;

type GeminiRole = 'user' | 'model';

interface GeminiPart {
  text: string;
}

interface GeminiContent {
  role: GeminiRole;
  parts: GeminiPart[];
}

export interface GeminiChatSession {
  history: GeminiContent[];
}

export const createChatSession = (): GeminiChatSession | null => {
  if (!API_KEY) {
    console.warn('VITE_GEMINI_API_KEY is missing. Chat functionality is disabled.');
    return null;
  }

  return { history: [] };
};

const extractResponseText = (payload: any): string => {
  const part = payload?.candidates?.[0]?.content?.parts?.[0]?.text;
  return typeof part === 'string' && part.trim().length > 0
    ? part
    : 'I apologize, but I cannot formulate a response at this moment.';
};

export const sendMessageToGemini = async (chat: GeminiChatSession | null, message: string): Promise<string> => {
  if (!chat) {
    return 'Configuration error: VITE_GEMINI_API_KEY is not set.';
  }

  try {
    chat.history.push({ role: 'user', parts: [{ text: message }] });

    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents: chat.history,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return 'I encountered a momentary lapse in connection. Please rephrase your query.';
    }

    const payload = await response.json();
    const modelText = extractResponseText(payload);
    chat.history.push({ role: 'model', parts: [{ text: modelText }] });

    return modelText;
  } catch (error) {
    console.error('Gemini API error:', error);
    return 'I encountered a momentary lapse in connection. Please rephrase your query.';
  }
};
