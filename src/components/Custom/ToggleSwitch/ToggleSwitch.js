import React, { useState } from 'react';
import ClockIcon from '../../../assets/svgs/clock-regular.svg';
import './ToggleSwitch.css';

const ToggleSwitch = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled(!isToggled);

  return (
    <div className="toggle-switch">
      <span className="toggle-switch-label">{label}</span>
      <div className="toggle-switch-container">
        <label className="toggle-switch-content">
          <input
            type="checkbox"
            checked={isToggled}
            onChange={toggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-switch-option">{isToggled ? 'Toggle ON' : 'Toggle OFF'} | Select Tolerance Level</span>
        <img src={ClockIcon} className="clock-icon" alt="clock_icon" />
      </div>
    </div>
  );
};

export default ToggleSwitch;
