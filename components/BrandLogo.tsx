import React from 'react';

type BrandLogoProps = {
  className?: string;
  showRing?: boolean;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'h-16 w-16', showRing = true }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      role="img"
      aria-label="Lowkey Luxury brand logo"
      className={className}
    >
      <defs>
        <linearGradient id="lux-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0E3A2" />
          <stop offset="35%" stopColor="#DCC746" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA8C2C" />
        </linearGradient>
      </defs>

      {showRing && (
        <circle
          cx="256"
          cy="256"
          r="220"
          fill="none"
          stroke="url(#lux-gold)"
          strokeWidth="6"
          opacity="0.95"
        />
      )}

      <path
        d="M165 132 C150 132 140 142 140 157 V365 C140 379 151 390 165 390 C179 390 190 379 190 365 V262 C190 239 209 220 232 220 H305 C319 220 330 209 330 195 C330 181 319 170 305 170 H232 C209 170 190 151 190 128 C190 114 179 103 165 103 C151 103 140 114 140 128"
        fill="url(#lux-gold)"
      />

      <path
        d="M278 188 C292 188 304 199 304 213 V366 C304 380 315 391 329 391 C343 391 354 380 354 366 V291 L393 372 C399 384 413 390 426 384 C438 378 444 363 438 350 L390 258 L431 178 C438 166 434 151 422 145 C410 138 395 143 388 155 L354 224 V213 C354 199 342 188 328 188 Z"
        fill="url(#lux-gold)"
      />

      <path
        d="M229 160 C236 147 245 140 256 140 C267 140 276 147 283 160 C290 147 299 140 310 140 C321 140 330 147 337 160 C344 173 342 186 332 194 C323 202 311 200 303 190 C296 200 284 204 275 198 C267 204 255 200 248 190 C240 200 228 202 219 194 C209 186 207 173 214 160 Z"
        fill="url(#lux-gold)"
      />
      <circle cx="256" cy="132" r="8" fill="url(#lux-gold)" />
      <circle cx="314" cy="136" r="7" fill="url(#lux-gold)" />
      <circle cx="198" cy="136" r="7" fill="url(#lux-gold)" />
      <circle cx="336" cy="156" r="6" fill="url(#lux-gold)" />
      <circle cx="176" cy="156" r="6" fill="url(#lux-gold)" />
    </svg>
  );
};

export default BrandLogo;
