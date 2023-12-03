import React, { useState } from 'react';
import './RadioButtonGroup.css';

const RadioButtonGroup = ({ label, options, name, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="radio-button-group">
      <span className="radio-group-label">{label}</span>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleChange}
              className="radio-input"
            />
            <span className="radio-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
