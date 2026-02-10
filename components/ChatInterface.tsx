import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createChatSession, sendMessageToGemini, type GeminiChatSession } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "I am Luxe. How may I refine your narrative today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session once
  const chatSession: GeminiChatSession | null = useMemo(() => createChatSession(), []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  const handleSend = async () => {
    if (!inputValue.trim() || status === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setStatus(LoadingState.LOADING);

    const responseText = await sendMessageToGemini(chatSession, userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setStatus(LoadingState.IDLE);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] flex flex-col relative z-10 font-sans border border-gold-700/30 rounded-lg bg-obsidian/80 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden">
      
      {/* Header */}
      <div className="p-4 border-b border-gold-700/30 bg-charcoal/50 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
          <h3 className="font-serif text-gold-300 text-lg tracking-wider">LUXE CONSULTANT</h3>
        </div>
        <span className="text-xs text-gray-500 uppercase tracking-widest">AI-Powered</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-sm border ${
                msg.role === 'user'
                  ? 'bg-gold-900/40 border-gold-700/50 text-gray-200'
                  : 'bg-black/40 border-gray-800 text-gold-100'
              }`}
            >
              <p className="leading-relaxed text-sm md:text-base whitespace-pre-wrap">{msg.text}</p>
              <span className="block text-[10px] text-gray-600 mt-2 text-right opacity-60">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {status === LoadingState.LOADING && (
          <div className="flex justify-start animate-pulse">
             <div className="max-w-[80%] p-4 rounded-sm bg-black/40 border border-gray-800 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gold-700/30 bg-charcoal/50">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your communication challenge..."
            className="w-full bg-black/50 border border-gold-800/50 rounded-sm py-4 px-6 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gold-500/80 transition-colors pr-12 font-light"
          />
          <button
            onClick={handleSend}
            disabled={status === LoadingState.LOADING || !inputValue.trim()}
            className="absolute right-3 p-2 text-gold-500 hover:text-gold-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;