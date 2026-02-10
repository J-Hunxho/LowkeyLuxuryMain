import React, { useState } from 'react';
import { bookingService } from '../services/mockBackend';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onCancel }) => {
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    try {
      await bookingService.processPayment(amount, { number: cardNumber, expiry, cvv });
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Transaction declined. Please verify your credentials.");
      setProcessing(false);
    }
  };

  // Simple formatting
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(val);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Total Investment</p>
        <p className="font-serif text-3xl text-gold-300">${amount.toLocaleString()}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label className="block text-gold-600 text-[10px] uppercase tracking-wider mb-1">Card Number</label>
          <div className="relative">
            <input 
              type="text" 
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="0000 0000 0000 0000"
              className="w-full bg-black/30 border border-gray-700 focus:border-gold-500/50 rounded-sm py-3 px-4 pl-10 text-gray-200 outline-none font-mono"
              required
            />
            <svg className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gold-600 text-[10px] uppercase tracking-wider mb-1">Expiry Date</label>
            <input 
              type="text" 
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              className="w-full bg-black/30 border border-gray-700 focus:border-gold-500/50 rounded-sm py-3 px-4 text-gray-200 outline-none font-mono"
              required
            />
          </div>
          <div>
            <label className="block text-gold-600 text-[10px] uppercase tracking-wider mb-1">Security Code</label>
            <input 
              type="password" 
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVC"
              className="w-full bg-black/30 border border-gray-700 focus:border-gold-500/50 rounded-sm py-3 px-4 text-gray-200 outline-none font-mono"
              required
            />
          </div>
        </div>

        <div className="pt-4 flex space-x-3">
          <button 
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors uppercase text-xs tracking-widest"
          >
            Abort
          </button>
          <button 
            type="submit"
            disabled={processing}
            className="flex-1 py-3 bg-gold-600 text-black font-bold uppercase text-xs tracking-widest hover:bg-gold-500 transition-colors flex justify-center items-center"
          >
            {processing ? (
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
            ) : (
              'Confirm Payment'
            )}
          </button>
        </div>
        
        <div className="flex justify-center items-center space-x-2 mt-4 opacity-50">
          <svg className="w-3 h-3 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">Secure Encrypted Transaction</span>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;