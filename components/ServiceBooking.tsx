import React, { useState } from 'react';
import { MOCK_SERVICES, bookingService } from '../services/mockBackend';
import { ServicePackage, ServiceTier } from '../types';
import { useAuth } from '../contexts/AuthContext';
import PaymentForm from './PaymentForm';

interface ServiceBookingProps {
  onRequireAuth: () => void;
}

const ServiceBooking: React.FC<ServiceBookingProps> = ({ onRequireAuth }) => {
  const { user } = useAuth();
  // Steps: 1: Service List, 2: Tier Selection (Optional), 3: Schedule, 4: Payment, 5: Success
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  const handleServiceSelect = (service: ServicePackage) => {
    if (service.tiers && service.tiers.length > 0) {
      setSelectedService(service);
      setStep(2);
    } else {
      setSelectedService(service);
      if (!user) {
        onRequireAuth();
      } else {
        setStep(3);
      }
    }
  };

  const handleTierSelect = (tier: ServiceTier) => {
    if (!selectedService) return;
    
    // Create a modified service object reflecting the tier
    const tieredService: ServicePackage = {
      ...selectedService,
      title: `${selectedService.title} - ${tier.name}`,
      price: tier.price,
      duration: tier.period,
      description: tier.description || selectedService.description
    };

    setSelectedService(tieredService);
    
    if (!user) {
      onRequireAuth();
    } else {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setSelectedService(null);
    } else if (step === 3) {
      // Check if original service had tiers to know where to go back
      const original = MOCK_SERVICES.find(s => selectedService?.id === s.id);
      if (original?.tiers) {
        // We need to reset the selectedService to the original "parent" service without the specific tier modifications
        setSelectedService(original);
        setStep(2);
      } else {
        setStep(1);
        setSelectedService(null);
      }
    } else if (step === 4) {
      setStep(3);
    }
  };

  const handleSchedule = () => {
    if (date && time) {
      setStep(4);
    }
  };

  const handlePaymentSuccess = async () => {
    if (!user || !selectedService) return;
    const ref = await bookingService.createBooking(user.id, selectedService.id, date, time);
    setBookingRef(ref);
    setStep(5);
  };

  // Step 1: Service Selection
  if (step === 1) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_SERVICES.map(service => (
          <div 
            key={service.id}
            className="group relative bg-charcoal/40 border border-gold-900/30 p-8 hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] flex flex-col"
          >
            <div className="flex-1">
              <h3 className="font-serif text-xl text-gold-200 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center space-x-2 text-xs text-gold-600 uppercase tracking-widest mb-8">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{service.duration}</span>
              </div>
            </div>
            <div className="flex items-end justify-between border-t border-gray-800 pt-6">
              <div className="flex flex-col">
                <span className="text-2xl text-white font-light">${service.price.toLocaleString()}</span>
                {service.tiers && <span className="text-[10px] text-gray-500 uppercase">Starting At</span>}
              </div>
              <button 
                onClick={() => handleServiceSelect(service)}
                className="text-gold-500 hover:text-white text-xs uppercase tracking-widest border-b border-gold-500/30 hover:border-white transition-all pb-1"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Step 2: Tier Selection
  if (step === 2 && selectedService?.tiers) {
    return (
      <div className="animate-fade-in">
        <button 
          onClick={handleBack} 
          className="text-gray-500 hover:text-gold-400 text-xs uppercase tracking-widest mb-8 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Catalog
        </button>

        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl text-gold-200 mb-2">{selectedService.title}</h3>
          <p className="text-gray-400 font-light">Select your level of engagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {selectedService.tiers.map(tier => (
            <div 
              key={tier.id} 
              className={`relative bg-black/40 border p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${tier.period.includes('Year') ? 'border-gold-500/70 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-gold-900/30 hover:border-gold-600/50'}`}
            >
              {tier.period.includes('Year') && (
                <div className="absolute top-0 right-0 bg-gold-600 text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                  Exclusive
                </div>
              )}
              
              <h4 className="text-lg font-serif text-gold-100 mb-2">{tier.name}</h4>
              <p className="text-gray-500 text-xs mb-6 h-10">{tier.description}</p>
              
              <div className="mb-8 pb-8 border-b border-gray-800">
                <span className="text-3xl font-light text-white">${tier.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500 ml-1">{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-400">
                    <span className="text-gold-500 mr-3 mt-0.5">›</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleTierSelect(tier)}
                className={`w-full py-3 uppercase tracking-widest text-xs font-bold transition-all ${
                  tier.period.includes('Year') 
                    ? 'bg-gold-600 text-black hover:bg-gold-500' 
                    : 'border border-gold-700 text-gold-500 hover:bg-gold-900/30 hover:text-gold-300'
                }`}
              >
                Select Option
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Step 3: Schedule
  if (step === 3 && selectedService) {
    return (
      <div className="max-w-2xl mx-auto bg-charcoal/40 border border-gold-900/30 p-8 md:p-12 animate-fade-in">
        <button 
          onClick={handleBack} 
          className="text-gray-500 hover:text-gold-400 text-xs uppercase tracking-widest mb-8 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        
        <h3 className="font-serif text-2xl text-gold-200 mb-2">Schedule Consultation</h3>
        <p className="text-gray-500 text-sm mb-2">
          Initial onboarding for <span className="text-gold-400">{selectedService.title}</span>.
        </p>
        <p className="text-gray-600 text-xs mb-8 uppercase tracking-wider">
          Investment: ${selectedService.price.toLocaleString()} {selectedService.duration !== 'One-time' && selectedService.duration}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-gold-600 text-[10px] uppercase tracking-wider mb-2">Preferred Date</label>
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 focus:border-gold-500/50 text-gray-200 px-4 py-3 outline-none transition-colors accent-gold-500"
              style={{ colorScheme: 'dark' }}
            />
          </div>
          <div>
            <label className="block text-gold-600 text-[10px] uppercase tracking-wider mb-2">Preferred Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 focus:border-gold-500/50 text-gray-200 px-4 py-3 outline-none transition-colors"
            >
              <option value="">Select Time</option>
              <option value="09:00">09:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleSchedule}
          disabled={!date || !time}
          className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold py-4 uppercase tracking-widest text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Proceed to Payment
        </button>
      </div>
    );
  }

  // Step 4: Payment
  if (step === 4 && selectedService) {
    return (
      <div className="max-w-xl mx-auto bg-charcoal/40 border border-gold-900/30 p-8 md:p-12 animate-fade-in">
        <PaymentForm 
          amount={selectedService.price}
          onSuccess={handlePaymentSuccess}
          onCancel={handleBack}
        />
      </div>
    );
  }

  // Step 5: Success
  if (step === 5) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-500/30">
          <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-gold-200 mb-4">Acquisition Complete</h3>
        <p className="text-gray-400 text-lg mb-8">
          Your consultation for <span className="text-gold-400">{selectedService?.title}</span> has been secured.
        </p>
        <div className="inline-block bg-black/50 border border-gold-900/50 px-6 py-3 rounded-sm mb-8">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Booking Reference</p>
          <p className="text-xl font-mono text-gold-300">{bookingRef}</p>
        </div>
        <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
          A dedicated concierge will contact you shortly at {user?.email} to finalize logistics.
        </p>
        <button 
          onClick={() => { setSelectedService(null); setStep(1); }}
          className="text-gold-500 hover:text-white text-sm uppercase tracking-widest border-b border-gold-500/30 hover:border-white transition-all pb-1"
        >
          Return to Services
        </button>
      </div>
    );
  }

  return null;
};

export default ServiceBooking;