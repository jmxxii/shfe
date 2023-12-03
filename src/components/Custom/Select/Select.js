import React, { useState, useRef, useEffect } from 'react';
import './Select.css';

const CustomSelect = ({ options, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  const handleSelect = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select-container" ref={selectRef}>
      <div className="custom-select-control" onClick={toggleOpen}>
        <div className="custom-select-value">
          {selectedOption ? selectedOption.label : placeholder}
        </div>
        <div className={`custom-select-arrow ${isOpen ? 'open' : ''}`}/>
      </div>
      {isOpen && (
        <div className="custom-select-menu">
          {options.map(option => (
            <div
              key={option.value}
              className={`custom-select-option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
