import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, signup } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      onClose();
    } catch (err) {
      setError("Authentication failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-charcoal border border-gold-700/50 p-8 rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.1)]">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gold-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex justify-center mb-6">
          <img 
            src="/brand-logo.png" 
            alt="Lowkey Luxury" 
            className="h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          />
        </div>

        <h2 className="font-serif text-2xl text-gold-300 mb-2 text-center">
          {isLogin ? 'Client Access' : 'Initiate Membership'}
        </h2>
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">
          Welcome to the Inner Circle
        </p>

        {error && (
          <div className="bg-red-900/20 border border-red-900/50 text-red-200 text-sm p-3 mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-gold-600 text-xs uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black/50 border border-gray-800 focus:border-gold-500/50 text-gray-200 px-4 py-3 outline-none transition-colors"
                placeholder="J. Gatsby"
                required
              />
            </div>
          )}
          
          <div>
            <label className="block text-gold-600 text-xs uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-gray-800 focus:border-gold-500/50 text-gray-200 px-4 py-3 outline-none transition-colors"
              placeholder="name@domain.com"
              required
            />
          </div>

          <div>
            <label className="block text-gold-600 text-xs uppercase tracking-wider mb-2">Passphrase</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-gray-800 focus:border-gold-500/50 text-gray-200 px-4 py-3 outline-none transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold py-3 uppercase tracking-widest text-sm transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Authenticating...' : (isLogin ? 'Enter' : 'Join')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-gray-500 hover:text-gold-300 underline decoration-gray-700 underline-offset-4 transition-colors"
          >
            {isLogin ? "No account? Request Access" : "Already a member? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;