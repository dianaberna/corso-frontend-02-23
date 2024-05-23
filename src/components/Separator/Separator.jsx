import React from 'react';
import "./Seprator.css";

function Separator() {
  return (
    <div className="wavy-separator">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: "rgb(151, 91, 175)"}} />
            <stop offset="50%" style={{stopColor: "rgb(118, 57, 143)"}} />
            <stop offset="80%" style={{stopColor: "rgb(43, 7, 80)"}} />
            {/* <stop offset="80%" style={{stopColor: "rgb(48, 38, 5)"}} /> */}
            <stop offset="100%" style={{stopColor: "rgb(36, 36, 36)"}} />
          </linearGradient>
        </defs>
        <path fill="url(#grad)" fillOpacity="1" d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default Separator;