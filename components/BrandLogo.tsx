import React from 'react';

type BrandLogoProps = {
  className?: string;
  showRing?: boolean;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'h-16 w-16', showRing = true }) => {
  return (
    <div className={`relative ${className}`} role="img" aria-label="Lowkey Luxury brand logo">
      {showRing && (
        <div
          className="absolute inset-0 rounded-full border border-gold-500/60 shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-[2px] rounded-full overflow-hidden bg-black">
        <img
          src="/brand-logo.png"
          alt="Lowkey Luxury"
          className="h-full w-full object-cover scale-[1.16]"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default BrandLogo;
