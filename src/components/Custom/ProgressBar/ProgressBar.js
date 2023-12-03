import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  const percentage = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
