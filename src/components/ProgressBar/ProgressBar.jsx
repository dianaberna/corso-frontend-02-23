import React from 'react';
import './ProgressBar.css'; // Assicurati di creare questo file per lo stile

const ProgressBar = ({ level, maxLevel }) => {
  const percentage = (level / maxLevel) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;